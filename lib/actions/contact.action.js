"use server";

import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";
import Contact from "@/components/models/contact.model";
const nodemailer = require("nodemailer");
const { createTransport } = require("nodemailer");

const { APP_EMAIL, APP_PASSWORD, ADMIN_MAIL,HOST_HOST,SMTP_PORT } = process.env;

export async function fetchContactList({
  searchString = "",
  pageNumber,
  pageSize,
  sortBy = "desc",
}) {
  try {
    connectToDB();
    const skipAmount = (pageNumber - 1) * pageSize;
    searchString = String(searchString).trim();

    // Create a case-insensitive regular expression for the provided search string.
    const regex = new RegExp(searchString, "i");

    // Create an initial query object to filter contact.
    const query = {
      fname: { $ne: "" },
    };

    // If the search string is not empty, add the $or operator to match either username or name fields.
    if (searchString.trim() !== "") {
      query.$or = [{ fname: { $regex: regex } }, { lname: { $regex: regex } }];
    }

    // Define the sort options for the fetched contact based on createdAt field and provided sort order.
    const sortOptions = { createdAt: sortBy };

    const contactQuery = Contact.find(query)
      .sort(sortOptions)
      .skip(skipAmount)
      .limit(pageSize);

    // Count the total number of contact that match the search criteria (without pagination).
    const totalcontactCount = await Contact.countDocuments(query);

    const contact = await contactQuery.exec();

    // Check if there are more contact beyond the current page.
    const isNext = totalcontactCount > skipAmount + contact.length;

    return { contact, isNext };
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function deleteContact({ id, path }) {
  try {
    connectToDB();
    const isContactExist = await Contact.findOne({ _id: id });
    if (isContactExist) {
      await Contact.deleteOne({ _id: id });
    } else {
      throw new Error(`No contact exist`);
    }

    revalidatePath(path);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

export async function fetchContact(id) {
  try {
    connectToDB();

    const contactFetch = await Contact.findOne({ _id: id });
    if (!contactFetch) {
      throw new Error(`No data exist on this id`);
    }
    return contactFetch;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
export async function sendMailed(formData) {
  // console.log(formData);
  // return;
  try {
    const transporter = createTransport({
      host: HOST_HOST, // Replace with your provider's SMTP host
      port: SMTP_PORT, // Use secure port (typically 465 or 587)
      secure: true, // Always use secure connection (TLS)
      auth: {
        user: APP_EMAIL,
        pass: APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const {
      email,
      name,
      phone,
      datamessage,
      address,
      location,
      website,
      plan,
      category,
    } = formData;
    const sendMail = async (emailOptions) => {
      try {
        await transporter.sendMail(emailOptions);
        console.log("Message sent successfully!");
      } catch (error) {
        console.error("Error sending email:", error.message);
      }
    };

    function assignValue(value) {
      switch (value) {
        case 1:
          return "Static Website 5 Page";
        case 2:
          return "Dynamic Website";
        case 3:
          return "Website + Promotion";
        case 4:
          return "Shopping Website";
        case 5:
          return "SEO &amp; Digital Marketing - 6 Months";
        case 6:
          return "Business Package";
        default:
          return "Static Website 5 Page";
      }
    }
    const   planText = assignValue(plan)
    const htmlBody = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            border-radius: 8px 8px 0 0;
        }
        .content {
            padding: 20px 0;
        }
        .info-item {
            margin-bottom: 15px;
        }
        .info-item label {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Contact Form Submission</h2>
        </div>
        <div class="content">
        <div class="info-item">
                <label for="subject">Category:</label>
                <span id="subject">${category}</span>
            </div>
        <div class="info-item">
                <label for="subject">Plan:</label>
                <span id="subject">${planText}</span>
            </div>
            <div class="info-item">
                <label for="firstname">Full Name:</label>
                <span id="firstname">${name}</span>
            </div>
            
            <div class="info-item">
                <label for="email">Email:</label>
                <span id="email">${email}</span>
            </div>
            <div class="info-item">
                <label for="phone">Phone:</label>
                <span id="phone">${phone}</span>
            </div>
            <div class="info-item">
                <label for="subject">Address:</label>
                <span id="subject">${address}</span>
            </div>
            <div class="info-item">
                <label for="subject">Location:</label>
                <span id="subject">${location}</span>
            </div>
            <div class="info-item">
                <label for="subject">Website:</label>
                <span id="subject">${website}</span>
            </div>
            
            <div class="info-item">
                <label for="message">Message:</label>
                <span id="message">${datamessage}</span>
            </div>
        </div>
    </div>
</body>
</html>

    
    `;

    // Example usage
    const mailOptions = {
      from: '"SmartWebin" <info@phpwebsites.in>',
      to: ADMIN_MAIL,
      subject: "Contact Form Submission",
      text: "This is the plain text body of the email",
      html: htmlBody,
    };

    sendMail(mailOptions);
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}
