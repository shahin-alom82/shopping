import Link from "next/link";

const SuccessPage = () => {
      return (
            <div className="max-w-screen-md mx-auto py-40 px-4 lg:px-0">

                  <div className="bg-gray-200 text-center px-4 py-10 shadow-lg shadow-gray-300">
                        <h1 className='lg:text-3xl text-xl font-semibold tracking-wide'>Payment Successfully!</h1>
                        <p className="mt-5">Payment success refers to the successful completion of a transaction where the payment is processed and verified. The user receives a confirmation, and the purchased goods or services are approved for delivery. Both the buyer and seller are notified of the successful transaction.</p>

                        <Link href={"/"}>
                              <button className="bg-blue-600 py-1 px-4 text-white text-[16px] mt-6">Go to Home</button>
                        </Link>
                  </div>
            </div>
      );
};

export default SuccessPage;