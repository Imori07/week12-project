import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function suggestPage() {
  async function handleSubmit(formValues) {
    "use server";
    const businessName = formValues.get("business_name");
    const businessType = formValues.get("business_type");
    const location = formValues.get("location");
    const reason = formValues.get("reason");

    db.query(
      `insert into suggest (business_name, business_type, location, reason) values ($1, $2, $3, $4)`,
      [businessName, businessType, location, reason]
    );
    revalidatePath(`/`);
    redirect(`/`);
  }

  return (
    <>
     <div className="space-y-6">
          <div >
            <p className="text-xl text-amber-800">
              <strong>1. Name of Business</strong>: Enter the name of the
              business in the "Name of Business" tab.
            </p>
          </div>

          <div >
            <p className="text-xl text-amber-800">
              <strong>2. Business Type</strong>: Use "Business Type" to indicate
              the type of business, e.g., Cafe, Hotel, Gym, Museum, Event Space,
              etc.
            </p>
          </div>

          <div >
            <p className="text-xl text-amber-800">
              <strong>3. Address/Location</strong>: Provide address/location
              information, such as the street name, postcode, or proximity to
              landmarks.
            </p>
          </div>

          <div >
            <p className="text-xl text-amber-800">
              <strong>4. Reason for Suggestion</strong>: Explain why your
              suggestion should be considered a Hidden Gem.
            </p>
          </div>
        </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r ">
        <div className="bg-amber-100 p-8 rounded-xl shadow-xl w-full max-w-xl">
          <h1 className="text-4xl text-center font-bold text-amber-950 mb-8">
            Suggest a New Business
          </h1>

          <form action={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label
                htmlFor="business_name"
                className="text-lg font-semibold mb-2 text-amber-800"
              >
                Name of Business:
              </label>
              <input
                type="text"
                name="business_name"
                id="business_name"
                className="p-3 rounded-xl w-[200px] bg-amber-50 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-600"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="business_type"
                className="text-lg  text-amber-800 font-semibold mb-2"
              >
                Business Type:
              </label>
              <input
                type="text"
                name="business_type"
                id="business_type"
                className="p-3  text-gray-600 rounded-xl bg-amber-50 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="location"
                className="text-lg text-amber-800 font-semibold mb-2"
              >
                Location:
              </label>
              <textarea
                id="location"
                name="location"
                className="p-3  text-amber-600 rounded-xl bg-amber-50 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows="4"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="reason"
                className="text-lg  text-amber-800 font-semibold mb-2"
              >
                Reason for Suggestion:
              </label>
              <textarea
                id="reason"
                name="reason"
                className="p-3 text-gray-600  rounded-xl bg-amber-50 border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                rows="4"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Suggestion
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}