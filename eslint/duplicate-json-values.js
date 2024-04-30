module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow duplicate values in a specific JSON file",
      category: "Possible Errors",
      recommended: true,
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      "Program:exit": function () {

        const jsonFiles = ["en.json", "types_en.json", "listHeaders_en.json"];
        const fileName = context.getFilename();
        const fileNameWithExtension = fileName.split('/').pop();
        let merged = {};

        if (jsonFiles.includes(fileNameWithExtension)) {
          let file;
          let fileContent;
          try {
            const fs = require('fs');
            file = fs.readFileSync(fileName, 'utf8');
            fileContent = JSON.parse(file);
            merged = {
              ...fileContent
            }
          } catch (e) {
            context.report({
              message: `Error parsing JSON: "${file}"`,
              loc: fileNameWithExtension,
            });
            return;
          }

          // Check for duplicate values
          const values = new Set();
          for (const key in merged) {
            if (values.has(merged[key])) {
              context.report({
                message: `Duplicate value "${fileContent[key]}" with key: ${key} found in ${fileNameWithExtension}`,
                loc: fileNameWithExtension,
              });
            } else {
              values.add(merged[key]);
            }
          }
        }
      },
    };
  },
};
