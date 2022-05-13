import cx from "classnames";
import { stat } from "fs";

interface TableRowProps {
  name: string;
  category: "Mobile" | "Desktop";
  item: number;
  price: number;
  status: "Failed" | "Pending" | "Success";
  image: string;
}

export default function TableRow(props: TableRowProps) {
  const { name, category, item, price, status, image } = props;
  const statusClass = cx({
    "float-start icon-status": true,
    failed: status === "Failed",
    pending: status === "Pending",
    success: status === "Success",
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt="Game Thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {name}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
