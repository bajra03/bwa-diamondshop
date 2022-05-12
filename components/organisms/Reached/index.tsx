import HorizontalLine from "./HorizontalLine";
import ReachItem from "./ReachItem";
import VerticalLine from "./VerticalLine";

export default function Reached() {
  return (
    <section className="reached pt-50 pb-50">
      <div className="container-fluid">
        <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
          <ReachItem title="290M+" subTitle="Players Top Up" />
          <VerticalLine />
          <HorizontalLine />
          <ReachItem title="12.500" subTitle="Games Available" />
          <VerticalLine />
          <HorizontalLine />
          <ReachItem title="99,9%" subTitle="Happy Players" />
          <VerticalLine />
          <HorizontalLine />
          <ReachItem title="4.7" subTitle="Rating Worldwide" />
        </div>
      </div>
    </section>
  );
}
