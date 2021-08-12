import {
  RepoContainer,
  GenericInfo,
  ContainerStats,
  GenericStats,
  ReposText,
  Link,
} from "./styles";
function Repository({
  name,
  language,
  html_url: url,
  stargazers_count: stars,
  open_issues_count: open_issue,
  watchers_count: watchers,
}) {
  return (
    <RepoContainer>
      <GenericInfo>
        <ReposText font="name">{name}</ReposText>
        <ReposText font="language">{language}</ReposText>
      </GenericInfo>
      <ContainerStats>
        <GenericStats>
          <ReposText font="stars">Stars: {stars}</ReposText>
          <ReposText font="stars">Open Issue: {open_issue}</ReposText>
          <ReposText font="stars">Watchers: {watchers}</ReposText>
        </GenericStats>

        <Link href={url} target="_blank" rel="external">
          <ReposText font="link">Open Repository</ReposText>
        </Link>
      </ContainerStats>
    </RepoContainer>
  );
}

export default Repository;
