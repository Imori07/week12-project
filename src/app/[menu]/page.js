import { db } from '@/utils/dbConnection';
import Link from 'next/link';
import Image from 'next/image';
import BusinessFilter from '@/components/businessfilter';

export default async function MenuPage({ params }) {
  console.log('params in whole are', await params);
  const menuparams = (await params).menu;
  console.log('menu params are', menuparams);
  const menu = await db.query(`select * from menu where title_name = $1`, [
    menuparams,
  ]);
  console.log('individual menu is', menu);
  const menuRow = menu.rows[0]?.id;
  const business = await db.query(`select * from business where menu_id = $1`, [
    menuRow,
  ]);
  console.log('all business results', business);
  const wrangleData = business.rows;

  const BusinessCafe = await db.query(
    `select * from business where business_type = $1`,
    ['Cafe']
  );

  const BusinessBars = await db.query(
    `select * from business where business_type = $1`,
    ['Bars']
  );

  const BusinessRestaurant = await db.query(
    `select * from business where business_type = $1`,
    ['Restaurant']
  );

  return (
    <>
      <div className='h-auto m-6 mb-50 bg-white'>
        <h1 className='items-center text-center capitalize text-black text-[40px] font-bold'>
          {menuparams}
        </h1>
        <div>
          {menuparams === 'foods' && (
            <BusinessFilter
              businessId={business.rows}
              cafe={BusinessCafe.rows}
              Restaurant={BusinessRestaurant.rows}
              Bars={BusinessBars.rows}
            />
          )}
          {menuparams != 'foods' && (
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {wrangleData.length === 0 ? (
                <p>Sorry! There is no Business to show</p>
              ) : (
                wrangleData.map((data) => (
                  <div
                    className='flex flex-col items-center gap-4 m-6 p-8 bg-gray-100 rounded-md'
                    key={data.id}
                  >
                    <div className='w-[250px] h-[250px]'>
                      <Image
                        className='h-full w-full object-cover rounded-md'
                        src={data.business_img}
                        alt='Business'
                        width={250}
                        height={250}
                        unoptimized
                      />
                    </div>
                    <p className='text-center font-bold text-gray-800'>
                      {data.business_name}
                    </p>
                    <Link
                      className='font-bold text-gray-800 text-center text-sm bg-white p-3 m-3 hover:bg-yellow-500 hover:scale-105 hover:brightness-110 rounded-md'
                      href={`/${menuparams}/${data.id}`}
                    >
                      Discover More!
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-center mt-6'>
        <Link
          href={'/'}
          className='w-1/4 p-2 rounded-md bg-gray-600 text-white text-center font-bold hover:bg-gray-700 transition'
        >
          ← Back
        </Link>
      </div>
    </>
  );
}
