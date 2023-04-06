import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Dashboard from "pages/Dashboard/Dashboard";
import Layout from "pages/Layout/Layout";
import { Products } from "pages/Products/Products";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "theme";

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Dashboard />} />
              <Route path="/transactions" element={<Dashboard />} />
              <Route path="/geography" element={<Dashboard />} />
              <Route path="/overview" element={<Dashboard />} />
              <Route path="/daily" element={<Dashboard />} />
              <Route path="/monthly" element={<Dashboard />} />
              <Route path="/breakdown" element={<Dashboard />} />
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/performance" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
