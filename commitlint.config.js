module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^[[A-Z]{1,4}-[0-9]{1,4}]\s(\w*)(?:\((.*)\))?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      issuePrefixes: ['^XXX-[0-9]{1,4}'],
    },
  },
};
