export default function ServiceCard(props) {
  const { service } = props;
  return (
    <div className="max-w-[300px] xl:max-w-[250px] w-full max-h-full bg-white flex flex-col justify-center items-center rounded p-10 shadow">
      <div className="max-w-[40px] w-full mb-3 flex-1">
        <img src={service.img} />
      </div>
      <div className="text-center flex-1">
        <h2>{service.title}</h2>
        <p className="leading-tight mt-2">
          <small>{service.desc}</small>
        </p>
      </div>
    </div>
  );
}
