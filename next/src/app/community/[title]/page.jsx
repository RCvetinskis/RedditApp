import axios from "axios";
import { SERVER_API } from "../../../../utils/API";
import PageNotFound from "@/app/components/screens/PageNotFound";
import CommunityScreen from "@/app/components/screens/CommunityScreen";
const getPage = async (title) => {
  try {
    const { data } = await axios.get(SERVER_API.getCommunity(title));
    if (!data.error) {
      return data.results;
    } else {
      console.log(data.message);
    }
  } catch (error) {
    console.log("error in CommunityPage", error);
  }
};

async function CommunityPage({ params }) {
  const { title } = params;
  const community = await getPage(title);

  return (
    <>
      {!community ? (
        <PageNotFound />
      ) : (
        <CommunityScreen community={community} />
      )}
    </>
  );
}

export default CommunityPage;
