import { Metadata } from 'next'
import React from 'react'
import HeroPage from '@/app/(home)/_components/HeroPage'
import Image from 'next/image';
import { fetchOther } from '@/lib/actions/other.action';
const Page = async ({ params }) => {
    const id = params.id[1];

    const result = await fetchOther(id);

    return (
        <>
            <HeroPage title={result.title} image={'/images/works_banner.png'} />
            <section className="fst_serv">
                <div className="lg:max-w-screen-xl mx-auto md:px-6 xl:px-0 px-4 py-10">

                    <h2 className="h2 text-center mb-4">{result.title} </h2>



                    <div className="flex flex-wrap cus_crm">
                    {
                                    result.images.map((item, index) => (
                                    <div key={index} className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-3">
                                        <div className="mix2 category-1">
                                            <Image width={544} height={766} quality={100} src={`/assets/images/${item}`} key={index} alt={result.title} />
                                                <div className="hover_print">
                                                    <a className="pos_a" data-fancybox="images" href={`/assets/images/${item}`} data-caption=""></a>
                                                    <div className="div">
                                                        <a className="w3-button-plus" data-fancybox="images" href={`/assets/images/${item}`} data-caption="">+</a></div>
                                                </div>
                                                <div className="hover_port">
                                                    <div>
                                                        <h2>{result.title}</h2>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>

                                )
                            )
                        }


                    </div>

                </div>
            </section>
        </>
    )
}

export default Page

export async function generateMetadata({ params }) {
    const id = params.id[1];

    const result = await fetchOther(id);
    return {
      title: result.title,
    }
  }