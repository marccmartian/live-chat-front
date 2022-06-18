import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { Container, AvatarContainer } from "./AvatarElements";
import { Button } from "../Forms/FormElements";
import api from "../../utils/api";

const avatarApi = import.meta.env.VITE_AVATARS_URL;
const avatarKey = import.meta.env.VITE_AVATAR_KEY;

const SetAvatar = () => {
  const navigate = useNavigate();
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("chat-user")) navigate("/login");
  }, []);

  useEffect(() => {
    setLoading(true);
    const avatarsArr = [];

    const createAvatars = async () => {
      for (let i = 0; i < 4; i++) {
        const randomNum = Math.round(Math.random() * 1000);
        const avatar = await axios.get(
          `${avatarApi}/${randomNum}?apikey=${avatarKey}`
        );
        avatarsArr.push(avatar.data);
      }
      setAvatars(avatarsArr);
      setLoading(false);
    };
    createAvatars();
  }, []);

  const setProfilePicture = async () => {
    setLoading(true);

    if (selectedAvatar === undefined) {
      toast.error("Seleciona un avatar");
    } else {
      const user = JSON.parse(localStorage.getItem("chat-user"));

      const { data } = await api.put(`/users/${user._id}`, {
        avatarImage: avatars[selectedAvatar],
      });

      if (data.isSet) {
        user.isAvatarImageSet = true;
        user.avatarImage = data.image;
        localStorage.setItem("chat-user", JSON.stringify(user));
        navigate("/");
      } else {
        toast.error("Error setting avatar. Please try again");
      }
    }

    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <h1>Escoge un avatar para tu perfil</h1>

          <AvatarContainer>
            {avatars.length > 0 ? (
              <>
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={`data:image/svg+xml;utf8,${encodeURIComponent(
                      avatar
                    )}`}
                    onClick={() => setSelectedAvatar(index)}
                    className={`${selectedAvatar === index ? "selected" : ""}`}
                  />
                ))}
              </>
            ) : (
              <p>no hay nada</p>
            )}
          </AvatarContainer>

          <Button bgColor="blue" onClick={setProfilePicture}>
            Establecer
          </Button>
        </Container>
      )}
    </>
  );
};

export default SetAvatar;
