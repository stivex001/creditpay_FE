import {
  BillsIcon,
  TransferIcon,
  WalletIcon,
  WithdrawIcon,
} from "@/assets/icons/ActionsIcon";

const actions = [
  { label: "Loan Request", icon: <WalletIcon /> },
  { label: "Bills Payment", icon: <BillsIcon /> },
  { label: "Withdraw", icon: <WithdrawIcon /> },
  { label: "Transfer", icon: <TransferIcon /> },
];

export const ActionSection = () => {
  return (
    <section className="container mx-auto bg-[#142B71] rounded-xl py-24 mb-14">
      <div className="w-10/12 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {actions.map(({ label, icon }) => (
          <div
            key={label}
            className="flex flex-col items-center text-white text-sm"
          >
            <div className="mb-7">{icon}</div>
            <span className="text-center text-[42px] font-medium leading-tight">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
