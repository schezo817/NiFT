import { NextPage } from "next";
import Link from "next/link";
import NFTdetail from "../../../components/NFTdetail";

const Detail: NextPage = () => {
    return (
      <div>
          <div className="text-sm breadcrumbs">
              <ul>
                  <Link href={"/"}>
                      <li>
                          <a>Home</a>
                      </li>
                  </Link>
                  <Link href={"/marketplace"}>
                      <li>
                          <a>MarketPlace</a>
                      </li>
                  </Link>
                  <Link href={"/marketplace/detail"}>
                      <li>
                          <a>Detail</a>
                      </li>
                  </Link>
              </ul>
          </div>
          <NFTdetail />
      </div>
    );
};

export default Detail;
