import cx from "classnames";

interface ButtonTabProps {
  title: string;
  active: boolean;
  status: "failed" | "pending" | "success";
}

export default function ButtonTab(props: Partial<ButtonTabProps>) {
  const { title, active, status = "*" } = props;
  const buttonClass = cx({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });

  const dataFilter = cx({
    failed: status === "failed",
    pending: status === "pending",
    success: status === "success",
  });
  return (
    <a data-filter={status} href="#" className={buttonClass}>
      {title}
    </a>
  );
}
