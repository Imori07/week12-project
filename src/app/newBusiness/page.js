import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
export default function newBusinessPage (){
   
      async function handleSubmit(formValues) {
        "use server";
        const businessName = formValues.get("business_name");
        const businessAddress = formValues.get("business_address");
        const businessImg = formValues.get("business_img");
        const businessType = formValues.get("business_type");
        const menuId = formValues.get("menu_id");
        const businessPalceId = formValues.get("business_placeid");
    
        db.query(
          `insert into business (business_name,business_address,business_img,business_type,menu_id,business_placeid) values ($1, $2, $3,$4, $5, $6)`,
          [businessName, businessAddress, businessImg, businessType,menuId,businessPalceId]
        );
        revalidatePath("/newBusiness");
        redirect("/newBusiness");
      }
    
      return (
        <>
         
            <div className="w-[500px]  bg-orange-100 shadow-lg items-center rounded-lg p-10 mt-6 ">
              <form
                action={handleSubmit}
                className="flex flex-col items-center gap-4"
              >
                <label className="text-black" htmlFor="businessName">
                Business Name:
                </label>
                <input
                  type="text"
                  name="business_name"
                  id="business_name"
                  className="text-amber-800 rounded-xl  bg-orange-200"
                  required
                />
                <label className="text-black" htmlFor="businessAddress">
                Business Address :
                </label>
                <input
                  type="text"
                  name="business_address"
                  id="business_address"
                  className="text-amber-800 rounded-xl  bg-orange-200"
                  required
                />
                <label className="text-black" htmlFor="businessImg">
                Business Img :
                </label>
                <input type="text"
                  id="business_img"
                  name="business_img"
                  className="text-amber-800 rounded-xl bg-orange-200"
                  required
                />
                 <label className="text-black" htmlFor="businessType">
                Business Type :
                </label>
                <input type="text"
                  id="business_type"
                  name="business_type"
                  className="text-amber-800 rounded-xl bg-orange-200"
                  required
                />
                <label className="text-black" htmlFor="menuId">
                Menu Id :
                </label>
                <input type="text"
                  id="menu_id"
                  name="menu_id"
                  className="text-amber-800 rounded-xl bg-orange-200"
                  required
                />
                        <label className="text-black" htmlFor="businessPalceId">
                Place Id :
                </label>
                <input type="text"
                  id="business_placeid"
                  name="business_placeid"
                  className="text-amber-800 rounded-xl bg-orange-200"
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
        </>
      );
    }
