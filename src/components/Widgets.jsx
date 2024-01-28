import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article flex justify-center items-center gap-2 space-y-3 cursor-pointer ml-2">
      <div className="widgets__articleLeft text-[#0177b7]">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4 className="widgets__header text-[16px] font-[600]">{heading}</h4>
        <p className="widgets__sub">{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets sticky top-[80px] flex-[0.2] bg-white rounded-[10px] border-[lightgray] border-[1px] pb-[10px] h-fit">
      <div className="widgets__header flex items-center justify-between p-[10px]">
        <h2 className="text-[16px] font-[400]">LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Sarvesh is back", "Top news - 1k readers")}
      {newsArticle("New COVID varient Detected", "Top news - 99k readers")}
      {newsArticle("World War - III", "Top news - 18k readers")}
      {newsArticle("Is redux too good", "Coders - 18k readers")}
    </div>
  );
}

export default Widgets;
