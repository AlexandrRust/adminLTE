import ImageUploading from "react-images-uploading";
import theme from "../../theme/theme";

const ImageUpload = ({ getImages, items }) => {
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    getImages(imageList);
  };

  return (
    <div>
      <ImageUploading
        multiple
        value={items}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg", "gif", "png"]}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <>
            <div>
              <button
                style={theme.btn.btnGreen}
                type="button"
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              <button
                onClick={onImageRemoveAll}
                type="button"
                style={theme.btn.btnRed}
              >
                Remove all images
              </button>
            </div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width={100} height={100} />
                <div className="image-item__btn-wrapper">
                  <button
                    onClick={() => onImageUpdate(index)}
                    style={theme.btn.btnBlue}
                    type="button"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => onImageRemove(index)}
                    style={theme.btn.btnRed}
                    type="button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </ImageUploading>
    </div>
  );
};

export default ImageUpload;
