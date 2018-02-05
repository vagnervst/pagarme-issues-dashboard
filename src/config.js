const config = [
  {
    title: "Issues",
    rows: 3,
    columns: 3,
    widgets: [
      {
        extension: 'my-extension',
        name: 'GithubUser',
        title: 'Hello',
        x: 0,
        y: 0,
        rows: 1,
        columns: 1,
        interval: 2000
      },
      {
        extension: 'github-extension',
        name: 'IssuesPie',
        title: 'Hello',
        x: 1,
        y: 0,
        rows: 1,
        columns: 1,
        interval: 2000
      },
      {
        extension: 'github-extension',
        name: 'RecentIssues',
        title: 'Recent Issues',
        x: 2,
        y: 0,
        rows: 3,
        columns: 1,
        interval: 5000
      }
    ]
  },
  {
    title: "Pullrequests",
    rows: 1,
    columns: 1,
    widgets: [

    ]
  }
];

export default config;
