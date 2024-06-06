import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { LikeList } from "./like/LikeList";
import { LikeCreate } from "./like/LikeCreate";
import { LikeEdit } from "./like/LikeEdit";
import { LikeShow } from "./like/LikeShow";
import { CommentList } from "./comment/CommentList";
import { CommentCreate } from "./comment/CommentCreate";
import { CommentEdit } from "./comment/CommentEdit";
import { CommentShow } from "./comment/CommentShow";
import { DiscussionForumList } from "./discussionForum/DiscussionForumList";
import { DiscussionForumCreate } from "./discussionForum/DiscussionForumCreate";
import { DiscussionForumEdit } from "./discussionForum/DiscussionForumEdit";
import { DiscussionForumShow } from "./discussionForum/DiscussionForumShow";
import { LiveSessionList } from "./liveSession/LiveSessionList";
import { LiveSessionCreate } from "./liveSession/LiveSessionCreate";
import { LiveSessionEdit } from "./liveSession/LiveSessionEdit";
import { LiveSessionShow } from "./liveSession/LiveSessionShow";
import { ShareList } from "./share/ShareList";
import { ShareCreate } from "./share/ShareCreate";
import { ShareEdit } from "./share/ShareEdit";
import { ShareShow } from "./share/ShareShow";
import { PostList } from "./post/PostList";
import { PostCreate } from "./post/PostCreate";
import { PostEdit } from "./post/PostEdit";
import { PostShow } from "./post/PostShow";
import { ChallengeList } from "./challenge/ChallengeList";
import { ChallengeCreate } from "./challenge/ChallengeCreate";
import { ChallengeEdit } from "./challenge/ChallengeEdit";
import { ChallengeShow } from "./challenge/ChallengeShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FoodFolio"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Like"
          list={LikeList}
          edit={LikeEdit}
          create={LikeCreate}
          show={LikeShow}
        />
        <Resource
          name="Comment"
          list={CommentList}
          edit={CommentEdit}
          create={CommentCreate}
          show={CommentShow}
        />
        <Resource
          name="DiscussionForum"
          list={DiscussionForumList}
          edit={DiscussionForumEdit}
          create={DiscussionForumCreate}
          show={DiscussionForumShow}
        />
        <Resource
          name="LiveSession"
          list={LiveSessionList}
          edit={LiveSessionEdit}
          create={LiveSessionCreate}
          show={LiveSessionShow}
        />
        <Resource
          name="Share"
          list={ShareList}
          edit={ShareEdit}
          create={ShareCreate}
          show={ShareShow}
        />
        <Resource
          name="Post"
          list={PostList}
          edit={PostEdit}
          create={PostCreate}
          show={PostShow}
        />
        <Resource
          name="Challenge"
          list={ChallengeList}
          edit={ChallengeEdit}
          create={ChallengeCreate}
          show={ChallengeShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
