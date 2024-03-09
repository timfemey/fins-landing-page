import {
  BanknotesIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Automated Data Analysis",
    description:
      "Fins employs cutting-edge algorithms to swiftly process your accounting reports and financial data, providing instant insights into your business's financial health.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Tailored Recommendations",
    description:
      "Receive personalized recommendations based on your financial data and budgets, empowering you to make informed decisions and optimize your business strategy.",
    icon: FingerPrintIcon,
  },
  {
    name: "Interactive Budgeting Tools",
    description:
      "Utilize intuitive budgeting tools within the Fins app to set, track, and manage your financial goals with ease, ensuring financial stability and growth for your business.",
    icon: BanknotesIcon,
  },
  {
    name: "Advanced security",
    description:
      "Financial data is safeguarded with state-of-the-art encryption and multi-layered security protocols, ensuring peace of mind as you navigate the complexities of business finance with Fins.",
    icon: LockClosedIcon,
  },
];

export default function Features() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Get your Accounting Data Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for Finance Tracking is here
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Seamlessly integrating advanced analytics, personalized insights,
            and ironclad security measures, Fins empowers businesses to navigate
            the intricate landscape of finance with confidence, enabling
            strategic decision-making and unlocking pathways to sustained
            success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
