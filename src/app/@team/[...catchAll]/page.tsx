import Team from "../page";

// Settings 페이지에 접속해서 새로고침을 하면 404에러가 난다.
// 이걸 방지하기 위해 @team폴더에 default페이지 만들었지만,
// Settings페이지에서 새로고침을 하면 app폴더(최상위)에 있는 loading.tsx가 호출된다.
// 이걸 방지하기 위해 @team폴더에 [...catchAll]페이지를 만들어 team페이지가 호출되도록하면 team의 loading.tsx가 호출된다
const CatchAllPage = () => {
  return <Team />;
};

export default CatchAllPage;
