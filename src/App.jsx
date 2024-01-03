import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { fetchData } from "./redux/operations";
import "./App.css";
const MenuBar = lazy(() => import("./components/MenuBar/MenuBar"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loader = lazy(() => import("./components/Loader/Loader"));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData(false));
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MenuBar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
