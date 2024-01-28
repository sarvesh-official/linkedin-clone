function InputOptions({ Icon, title, color }) {
  return (
    <div className="flex item-center mt-[15px] text-[gray] p-[10px] cursor-pointer hover:rounded-[10px] hover:bg-[whitesmoke]">
      <Icon style={{ color: color }} />
      <p className="ml-1">{title}</p>
    </div>
  );
}

export default InputOptions;
