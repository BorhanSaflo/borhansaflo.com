import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Sections")
        .schemaType("section")
        .child(S.documentTypeList("section").title("Sections")),
      S.listItem()
        .title("Projects")
        .child(
          S.list()
            .title("Projects")
            .items([
              S.listItem()
                .title("Projects")
                .schemaType("project")
                .child(S.documentTypeList("project").title("Projects")),
              S.listItem()
                .title("Tags")
                .schemaType("tag")
                .child(S.documentTypeList("tag").title("Tags")),
            ])
        ),
      S.listItem()
        .title("Skills")
        .child(
          S.list()
            .title("Skills")
            .items([
              S.listItem()
                .title("Skill Groups")
                .schemaType("skillGroup")
                .child(S.documentTypeList("skillGroup").title("Skill Groups")),
              S.listItem()
                .title("Skills")
                .schemaType("skill")
                .child(S.documentTypeList("skill").title("Skills")),
            ])
        ),
    ]);
