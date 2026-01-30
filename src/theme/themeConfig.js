const themeConfig = {
  token: {
    colorPrimary: '#00b96b', // Vibrant green for grocery theme
    borderRadius: 8,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    colorBgContainer: '#ffffff',
    colorTextHeading: '#1a1a1a',
    colorText: '#4a4a4a',
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
      fontWeight: 600,
    },
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#f8f9fa',
      footerBg: '#ffffff',
    },
    Input: {
      controlHeight: 40,
    },
    Card: {
      borderRadiusLG: 12,
    }
  },
};

export default themeConfig;
