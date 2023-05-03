import { StructureBuilder } from "sanity/desk";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const deskStructure = (S: StructureBuilder, context: any) =>
  S.list()
    .title("Content")
    .items([
      // Optional configuration
      orderableDocumentListDeskItem({
        type: "project",
        title: "Projects",
        // Required if using multiple lists of the same 'type'
        id: "orderable-en-projects",
        // pass from the structure callback params above
        S,
        context,
      }),
      S.listItem()
        .title("Meta Data")
        .child(S.document().schemaType("meta").documentId("meta")),
      S.listItem()
        .title("Sections")
        .schemaType("section")
        .child(S.documentTypeList("section").title("Sections")),
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
      S.listItem()
        .title("Socials")
        .schemaType("social")
        .child(S.documentTypeList("social").title("Socials")),
      S.listItem()
        .title("Short Urls")
        .schemaType("shortUrl")
        .child(S.documentTypeList("shortUrl").title("Short Urls")),
    ]);
