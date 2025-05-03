import { Heading } from "../shared/Heading";
import { ProcessStep } from "./ProcessStep";
import applicationImg from "@/assets/images/application.svg";
import lefthand from "@/assets/images/Left_hand.svg";
import credit from "@/assets/images/Card.svg";
import speech from "@/assets/images/Speech_bubble.svg";

// const steps = [
//   {
//     number: "01",
//     title: "Application",
//     description:
//       "The borrower submits a loan application. The application includes personal and financial information, such as income, employment status, loan amount, and purpose of the loan.",
//     isReversed: false,
//   },
//   {
//     number: "02",
//     title: "Documentation and Verification",
//     description:
//       "The borrower will submit supporting documents, such as identification proof, income statements, bank statements, and other details as required for identity verification. This information is collected to assess the borrower's creditworthiness and eligibility for the loan.",
//     isReversed: true,
//   },
//   {
//     number: "03",
//     title: "Credit Assessment",
//     description:
//       "CreditPay conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, credit score, income stability, and other factors.",
//     isReversed: false,
//   },
//   {
//     number: "04",
//     title: "Loan Approval",
//     description:
//       "If the borrower meets the CreditPay's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees.",
//     isReversed: true,
//   },
// ];

export const HowWeWorks = () => {
  return (
    <section className=" mb-28">
      <div className="text-center mb-16">
        <Heading
          title="How we works ?"
          desc="This is a process, how you can get loan for your self."
        />
      </div>

      <div className="max-w-4xl mx-auto flex flex-col ">
        <ProcessStep
          number="01"
          title="Apllication"
          image={applicationImg}
          numberColor="#142B717A"
          description="The borrower submits a loan application. The application includes personal and financial information, such as income, employment history, credit score, and the purpose of the loan."
        />
        <ProcessStep
          number="02"
          title="Documentation and Verification"
          image={lefthand}
          numberColor="#A4BEFF"
          isReversed
          description="The borrower will submit supporting documents, such as identification proof, income statements, bank statements, and collateral details (if applicable). CreditPay verifies the information provided to assess the borrower's creditworthiness and eligibility for the loan."
        />
        <ProcessStep
          number="03"
          title="Credit Assessment"
          image={credit}
          numberColor="#142B717A"
          description="CreditPay conducts a credit assessment to evaluate the borrower's creditworthiness and ability to repay the loan. This process involves analyzing the borrower's credit history, income stability, debt-to-income ratio, and other factors."
        />
        <ProcessStep
          number="04"
          title="Loan Approval"
          image={speech}
          numberColor="#142B717A"
          isReversed
          description="If the borrower meets the CreditPay's lending criteria and passes the credit assessment, the loan is approved. The bank determines the loan amount, interest rate, repayment term, and any associated fees."
        />
      </div>
    </section>
  );
};
