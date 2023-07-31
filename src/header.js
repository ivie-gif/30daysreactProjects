// Functional Component
import React, { useState } from "react";

export const Image = () => {
  const [initialImage, setInitialImage] = useState(
    "https://media.licdn.com/dms/image/D4D03AQEFBYgRdj2fUQ/profile-displayphoto-shrink_400_400/0/1672828402733?e=1695254400&v=beta&t=NgFMhLLolNwd5iZ_3TxIDINZQMKtKnIw3f5_67mFTIs"
  );

  const handleChangeImage = () => {
        setInitialImage(initialImage == 'https://www.upwork.com/profile-portraits/c1Y9NoMw0A_un9O01HW0VB3L157xJpywgKjr43eHkUPdtnR5Ze4dkXTB5Fc1wUH0ce' ? 'https://media.licdn.com/dms/image/D4D03AQEFBYgRdj2fUQ/profile-displayphoto-shrink_400_400/0/1672828402733?e=1695254400&v=beta&t=NgFMhLLolNwd5iZ_3TxIDINZQMKtKnIw3f5_67mFTIs' : 'https://www.upwork.com/profile-portraits/c1Y9NoMw0A_un9O01HW0VB3L157xJpywgKjr43eHkUPdtnR5Ze4dkXTB5Fc1wUH0ce')
  }

  return (
    <div style={{ padding: "3% 0 0 5%" }}>
      <img src={initialImage} />
      <h4>Ivie Maryann Emwiongbon</h4>
      <div>
        <button
          style={{
            backgroundColor: "#0ee4f8",
            padding: "15px 10px",
            border: "none",
            fontSize: "15px",
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          onClick={handleChangeImage}
        >
          Change Image
        </button>
      </div>
    </div>
  );
};




// Class Component

// import React, { useState } from "react";

// export class Image extends React.Component {
//   state = {
//     image:
//       "https://media.licdn.com/dms/image/D4D03AQEFBYgRdj2fUQ/profile-displayphoto-shrink_400_400/0/1672828402733?e=1695254400&v=beta&t=NgFMhLLolNwd5iZ_3TxIDINZQMKtKnIw3f5_67mFTIs",
//   };

//   handleChangeImage = () => {
//     let ivieImage =
//       "https://www.upwork.com/profile-portraits/c1Y9NoMw0A_un9O01HW0VB3L157xJpywgKjr43eHkUPdtnR5Ze4dkXTB5Fc1wUH0ce";
//     let ivieImage2 =
//       "https://media.licdn.com/dms/image/D4D03AQEFBYgRdj2fUQ/profile-displayphoto-shrink_400_400/0/1672828402733?e=1695254400&v=beta&t=NgFMhLLolNwd5iZ_3TxIDINZQMKtKnIw3f5_67mFTIs";

//     let image = this.state.image === ivieImage ? ivieImage2 : ivieImage;

//     this.setState({ image });
//   };

//   render() {
//     return (
//       <div style={{ padding: "3% 0 0 5%" }}>
//         <img src={this.state.image} />
//         <div>
//           <button
//             style={{
//               backgroundColor: "#0ee4f8",
//               padding: "15px 10px",
//               marginTop: "10px",
//               border: "none",
//               fontSize: "15px",
//               cursor: "pointer",
//               fontWeight: "bold",
//               borderRadius: "5px",
//             }}
//             onClick={this.handleChangeImage}
//           >
//             Change Image
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
