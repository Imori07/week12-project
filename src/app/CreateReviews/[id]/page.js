import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import { currentUser } from '@clerk/nextjs/server';
import { createuser } from '@/utils/actions';


export default async function CreateNewPage ({ params }) {
    const user = await currentUser(); // Craig's hint

  if (!user) {
    redirect('/sign-in');
  }

    const { userId } = await auth();
    console.log({userId});  

  const business = await params;
  console.log(business);
  const businessdata = await db.query(
    `SELECT business.id, business.business_name, business.business_address, business.business_img, business.business_type,business.business_placeid, business.menu_id FROM business
        JOIN menu ON menu.id = business.menu_id WHERE business.id = $1 `,
    [business.id]
  );
  console.log(businessdata);
  const wrangleData = businessdata.rows;
  const userdata = await db.query(`select * from users where clerk_id = $1`,[userId]);
  const onedata = userdata.rows[0];
  if (userdata.length === 0) {
    notFound();
  }
  console.log(onedata)
  async function handleSubmit(formValues) {
    "use server";
    const username = formValues.get("username");
    const comment = formValues.get("comment");
    const userId = onedata.id;
    const businessId = business.id;

    db.query(
      `insert into reviews (username,comment,business_id,user_id) values ($1, $2, $3,$4)`,
      [ username, comment, businessId,userId]
    );
    revalidatePath(`/foods/${business.id}`);
    redirect(`/foods/${business.id}`);
  }

  return (
    <>
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
        <div className="w-[500px]  bg-orange-100 shadow-lg rounded-lg p-10 mt-6 ">
          <form
            action={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
           
            <label className="text-black" htmlFor="username">
              User Name:
            </label>
            <input
              type="username"
              name="username"
              id="username"
              className="text-amber-800  bg-orange-200"
              defaultValue={onedata.username}
              required
            />
            <label className="text-black" htmlFor="comment">
              Message :
            </label>
            <textarea
              id="comment"
              name="comment"
              className="text-amber-800 rounded-xl bg-orange-200"
              rows="4"
              cols="40"
              required
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit data
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
