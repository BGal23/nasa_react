import Button from "../components/Button/Button";
import Photos from "../components/Photos/Photos";
import Footer from "../components/Footer/Footer";
import Modal from "../components/Modal/Modal";
import GetDate from "../components/GetDate/GetDate";

const Gallery = () => {
  return (
    <>
      <GetDate />
      <Photos />
      <Button />
      <Footer />
      <Modal />
    </>
  );
};

export default Gallery;
