import { ThemeTokens } from "../../types";

export const xcodeTokens: ThemeTokens = {
  name: "Xcode",
  tokens: [
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: "#A0D07D",
      },
    },
    {
      scope: ["punctuation.definition.string", "string"],
      settings: {
        foreground: "#FC6A5D",
      },
    },
    {
      scope: ["constant.numeric", "keyword.other.unit", "support.constant"],
      settings: {
        foreground: "#D0BF69",
      },
    },
    {
      scope: [
        "constant.language",
        "entity.name.tag",
        "keyword",
        "storage.modifier",
        "storage.type",
        "support.type.primitive",
        "variable.language",
      ],
      settings: {
        foreground: "#FF7AB2",
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "keyword.control.directive",
        "keyword.control.preprocessor",
        "punctuation.definition.preprocessor",
      ],
      settings: {
        foreground: "#FFA14F",
      },
    },
    {
      scope: ["markup.underline.link"],
      settings: {
        foreground: "#6699FF",
      },
    },
    {
      scope: [
        "entity.name.type.class.std.rust",
        "storage.type.cs",
        "support.type",
        "meta.object-literal.key",
      ],
      settings: {
        foreground: "#ACF2E4",
      },
    },
    {
      scope: ["meta.object-literal.key"],
      settings: {
        foreground: "#72BFAE",
      },
    },
    {
      scope: [
        "punctuation.definition.variable",
        "punctuation.support.type.property-name",
        "storage.modifier.lifetime",
        "support.type.property-name",
        "variable.other.property",
      ],
      settings: {
        foreground: "#83C9BC",
      },
    },

    {
      scope: [
        "meta.definition.function",
        "meta.definition.method",
        "meta.method.declaration",
      ],
      settings: {
        foreground: "#5DD8FF",
      },
    },
    {
      scope: ["variable.other.constant, meta.definition.variable"],
      settings: {
        foreground: "#FFFFFF",
      },
    },
    {
      scope: [
        "variable.parameter",
        "meta.parameters",
        "meta.method.declaration",
        "meta.object.member",
      ],
      settings: {
        foreground: "#4eb1cc",
      },
    },
    {
      scope: [
        "variable.other.object",
        "meta.var.expr",
        "meta.definition.variable",
        "meta.block",
      ],
      settings: {
        foreground: "#4EB1CC",
      },
    },
    {
      scope: [
        "constant.language.boolean.false",
        "constant.language.boolean.true",
        "meta.objectliteral",
      ],
      settings: {
        foreground: "#D6C455",
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: "#E5CFFF",
      },
    },
    {
      scope: ["entity.name.type.class", "entity.other.inherited-class"],
      settings: {
        foreground: "#5DD8FF",
      },
    },
    {
      scope: ["keyword.operator"],
      settings: {
        foreground: "#A167E6",
      },
    },
    {
      scope: [
        "meta.return.type",
        "meta.function",
        "support.type.primitive",
        "meta.field.declaration",
        "meta.interface",
      ],
      settings: {
        foreground: "#D0A8FF",
      },
    },
    {
      scope: ["meta.function-call"],
      settings: {
        foreground: "#B281EB",
      },
    },
    {
      scope: [
        "entity.name.type.namespace",
        "entity.name.variable",
        "variable.other.assignment",
      ],
      settings: {
        foreground: "#49B7D7",
      },
    },
    {
      scope: [
        "variable.object.property",
        "meta.definition.property",
        "meta.field.declaration",
        "meta.class",
      ],
      settings: {
        foreground: "#49B7D7",
      },
    },
    {
      scope: [
        "fenced_code.block.language",
        "punctuation.definition.bold.markdown",
        "punctuation.definition.heading.markdown",
        "punctuation.definition.italic.markdown",
        "punctuation.definition.list.begin.markdown",
        "punctuation.definition.markdown",
        "punctuation.definition.metadata.markdown",
        "punctuation.definition.quote.begin.markdown",
        "punctuation.definition.raw.markdown",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
      ],
      settings: {
        foreground: "#72BFAE",
      },
    },
    {
      scope: ["string.other.link.title.markdown"],
      settings: {
        foreground: "#DFDFE0",
      },
    },
    {
      scope: ["entity.name.section"],
      settings: {
        foreground: "#DFDFE0",
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "variable.other.object.property",
        "support.variable.property",
        "variable.other.constant.property",
      ],
      settings: {
        foreground: "#83C9BC",
      },
    },
    {
      scope: ["markup.bold"],
      settings: {
        foreground: "#DFDFE0",
        fontStyle: "bold",
      },
    },
    {
      scope: ["markup.italic"],
      settings: {
        foreground: "#DFDFE0",
        fontStyle: "italic",
      },
    },
    {
      scope: ["punctuation"],
      settings: {
        foreground: "#DFDFE0",
      },
    },
    {
      scope: ["punctuation.decorator", "meta.brace.round"],
      settings: {
        foreground: "#FFFFFF",
      },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#D0A8FF",
      },
    },
    {
      scope: ["meta.tag.without-attributes", "metax.children"],
      settings: {
        foreground: "#FFFFFF",
      },
    },
    {
      scope: ["variable.other.readwrite.alias"],
      settings: {
        foreground: "#FFFFFF",
      },
    },
    {
      scope: ["punctuation.terminator.statement"],
      settings: {
        foreground: "#505050",
      },
    },
    {
      scope: ["punctuation.accessor.optional"],
      settings: {
        foreground: "#A167E6",
      },
    },
    {
      scope: ["case-clause.expr", "switch-block.expr", "switch-statement.expr"],
      settings: {
        foreground: "#41A1C0",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#6796E6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#CD9731",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#F44747",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#B267E6",
      },
    },
    {
      scope: ["support.class.dart", "other.source.dart"],
      settings: {
        foreground: "#E5CFFF",
      },
    },
    {
      scope: ["entity.name.function.dart"],
      settings: {
        foreground: "#5DD8FF",
      },
    },
    {
      scope: ["source.dart"],
      settings: {
        foreground: "#49B7D7",
      },
    },
    {
      scope: ["variable.parameter.dart"],
      settings: {
        foreground: "#83C9BC",
      },
    },
    {
      scope: ["entity.name.type.class.flutter", "source.flutter"],
      settings: {
        foreground: "#E5CFFF",
      },
    },
    {
      scope: ["entity.name.function.flutter"],
      settings: {
        foreground: "#5DD8FF",
      },
    },
    {
      scope: ["source.flutter"],
      settings: {
        foreground: "#49B7D7",
      },
    },
    {
      scope: ["variable.parameter.flutter"],
      settings: {
        foreground: "#83C9BC",
      },
    },
  ],
} as const;
