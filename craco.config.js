module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const mediapipeTasksVision = /node_modules[\\/]@mediapipe[\\/]tasks-vision[\\/]/;

      const appendExclude = (rule) => {
        if (!rule) return;

        if (!rule.exclude) {
          rule.exclude = [mediapipeTasksVision];
          return;
        }

        if (Array.isArray(rule.exclude)) {
          rule.exclude = [...rule.exclude, mediapipeTasksVision];
          return;
        }

        rule.exclude = [rule.exclude, mediapipeTasksVision];
      };

      const visitRules = (rules) => {
        if (!Array.isArray(rules)) return;

        for (const rule of rules) {
          if (!rule) continue;

          // CRA uses source-map-loader as a pre-loader; exclude the package that ships broken sourcemap references.
          const usesSourceMapLoader =
            rule.enforce === "pre" &&
            ((Array.isArray(rule.use) &&
              rule.use.some(
                (u) =>
                  u &&
                  typeof u === "object" &&
                  typeof u.loader === "string" &&
                  u.loader.includes("source-map-loader")
              )) ||
              (typeof rule.loader === "string" && rule.loader.includes("source-map-loader")));

          if (usesSourceMapLoader) {
            appendExclude(rule);
          }

          if (Array.isArray(rule.oneOf)) visitRules(rule.oneOf);
          if (Array.isArray(rule.rules)) visitRules(rule.rules);
        }
      };

      visitRules(webpackConfig.module?.rules);

      return webpackConfig;
    },
  },
};
