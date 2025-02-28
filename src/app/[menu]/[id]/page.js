import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";


export default async function BusinessPage({ params }) {
  const mapsKey = process.env.MAPS_API_KEY;
  const BusinessParams = await params;
  const businessdata = await db.query(
    `SELECT business.id, business.business_name, business.business_address, business.business_img, business.business_type,business.business_placeid, business.menu_id FROM business
JOIN menu ON menu.id = business.menu_id WHERE business.id = $1 `,
    [BusinessParams.id]
  );
  console.log(businessdata);
  const wrangleData = businessdata.rows;


  return (
    <div className="flex flex-col items-center gap-4 w-full bg-white m-6">
      {wrangleData.map((data) => (
        <div key={data.id}>
          <Image
            className="object-cover"
            src={data.business_img}
            alt="Business"
            width={500}
            height={500}
            unoptimized
          />
          <h1 className="text-black font-bold">{data.business_name}</h1>
          <p className="text-black font-bold">{data.business_address}</p>
        </div>
      ))}

    </div>
  );
}
