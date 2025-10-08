export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow deeply nested translation keys, enforce returning translation objects instead',
      category: 'Best Practices',
      recommended: false,
    },
    fixable: null,
    schema: [
      {
        type: 'object',
        properties: {
          maxDepth: {
            type: 'integer',
            minimum: 1,
            default: 2,
          },
        },
        additionalProperties: false,
      },
    ],
    messages: {
      nestedTranslation: 'Avoid deeply nested translation keys (depth: {{depth}}). Use t() with { returnObjects: true } and destructure the result instead.',
    },
  },

  create(context) {
    const options = context.options[0] || {};
    const maxDepth = options.maxDepth || 2;

    return {
      CallExpression(node) {
        // Check if it's a translation function call (t, $t, i18n.t, etc.)
        const isTranslationCall
          = (node.callee.type === 'Identifier' && ['t', '$t', 'translate'].includes(node.callee.name)) || (node.callee.type === 'MemberExpression' && node.callee.property.type === 'Identifier' && node.callee.property.name === 't');

        if (!isTranslationCall) {
          return;
        }

        // Check the first argument (translation key)
        const firstArgument = node.arguments[0];
        if (!firstArgument || firstArgument.type !== 'Literal') {
          return;
        }

        const key = firstArgument.value;
        if (typeof key !== 'string') {
          return;
        }

        // Count the depth (number of dots)
        const depth = (key.match(/\./g) || []).length + 1;

        if (depth > maxDepth) {
          context.report({
            node: firstArgument,
            messageId: 'nestedTranslation',
            data: {
              depth,
            },
          });
        }
      },
    };
  },
};
