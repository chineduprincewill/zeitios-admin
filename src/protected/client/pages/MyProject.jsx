import Sidebar from "../../../common/Sidebar";

const MyProject = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex flex-col">
        <div className="hidden md:w-[80px] lg:w-[200px]">...</div>
        <div className=" grow md:ml-[80px] lg:ml-[250px]  px-3 lg:px-12 mt-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            veniam maiores, sint at dolore numquam commodi ad sequi perspiciatis
            impedit deserunt tenetur iure voluptatem asperiores doloremque
            repudiandae minus. Aspernatur dolore, assumenda tenetur aliquam
            nisi, quasi laborum quisquam reiciendis in animi voluptates
            consequuntur dignissimos distinctio? Porro ducimus maxime voluptatem
            sint tenetur impedit eaque facere et perferendis. Molestiae minus
            aliquam totam quia, recusandae quaerat libero voluptate neque quidem
            ipsam temporibus fuga maiores id rem omnis et officiis hic aperiam
            voluptatem ipsa! Culpa ipsam animi amet nesciunt commodi
            exercitationem ea, impedit officia saepe est eius at obcaecati
            ducimus laborum aliquid non modi molestiae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
