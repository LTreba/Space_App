import { styled } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import photos from "./photos.json";
import { useState, useEffect } from "react";
import ZoomModal from "./components/ZoomModal";

const BackGroundGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154588 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  const [photosGallery, setPhotosGallery] = useState(photos);
  const [photoSelected, setSelectorPhoto] = useState(null);
  const [filter, setFilter] = useState('');
  const [tag, setTag] = useState(0);

  const onToggleFav = (photo) => {
    if(photo.id === photoSelected?.id) {
      setSelectorPhoto({ ...photoSelected, fav: !photoSelected.fav });
    }
    setPhotosGallery(photosGallery.map((photoGallery) => {
      return {
        ...photoGallery,
        fav: photoGallery.id === photo.id ? !photo.fav : photoGallery.fav
      };
    }));
  };

  useEffect(() => {
    const filterPhotos = photos.filter(photo => {
      const tagFilter = !tag || photo.tagId === tag;
      const titleFilter = !filter || photo.title.toLowerCase().includes(filter.toLowerCase());
      return tagFilter && titleFilter;
    });
    setPhotosGallery(filterPhotos);
  }, [filter, tag]);

  return (
    <BackGroundGradient>
      <GlobalStyles />
      <AppContainer>
        <Header filter={filter} setFilter={setFilter} />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner />
            <Gallery onPhotoSelected={photo => setSelectorPhoto(photo)} photos={photosGallery} onToggleFav={onToggleFav} setTag={setTag} />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal photo={photoSelected} onClose={() => setSelectorPhoto(null)} onToggleFav={onToggleFav} />
    </BackGroundGradient>
  );
}

export default App;
