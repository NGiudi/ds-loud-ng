import React, { useState } from "react";

/* components */
import {
  Dropdown,
  DropdownItem,
  DropdownPanel,
  DropdownToogle,
  Image,
  Text,
  ThemeDS,
} from "../../../index";

/* imagen */
import argentina from "../../../../assets/countries flag/argentina.png";
import brasil from "../../../../assets/countries flag/brasil.png";
import usa from "../../../../assets/countries flag/usa.png";

const story = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del icono de fontawensome free.",
    },
    size: {
      control: { type: "select" },
      description: "Recibe el valor del tamaño del ícono.",
      options: ["sm", "md", "lg"],
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
  },
};

export const Positions = () => {
  return (
    <ThemeDS>
      {/* TODO: Usar el componente Flex */}
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          width: "100%",
        }}
      >
        <Dropdown>
          <DropdownToogle>
            <Image img={argentina} size="avatar" type="round" />
          </DropdownToogle>

          <DropdownPanel>
            <DropdownItem value="ar">
              {/* TODO: Usar el componente Flex */}
              <div
                style={{ alignItems: "center", display: "flex", width: "100%" }}
              >
                <Image
                  img={argentina}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />
                <Text>Argentina</Text>
              </div>
            </DropdownItem>

            <DropdownItem value="usa">
              {/* TODO: Usar el componente Flex */}
              <div
                style={{ alignItems: "center", display: "flex", width: "100%" }}
              >
                <Image
                  img={usa}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />

                <Text>Estados Unidos</Text>
              </div>
            </DropdownItem>
          </DropdownPanel>
        </Dropdown>

        <Dropdown>
          <DropdownToogle>
            <Image img={argentina} size="avatar" type="round" />
          </DropdownToogle>

          <DropdownPanel direction="left">
            <DropdownItem value="ar">
              {/* TODO: Usar el componente Flex */}
              <div
                style={{ alignItems: "center", display: "flex", width: "100%" }}
              >
                <Image
                  img={argentina}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />
                <Text>Argentina</Text>
              </div>
            </DropdownItem>

            <DropdownItem value="usa">
              {/* TODO: Usar el componente Flex */}
              <div
                style={{ alignItems: "center", display: "flex", width: "100%" }}
              >
                <Image
                  img={usa}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />

                <Text>Estados Unidos</Text>
              </div>
            </DropdownItem>
          </DropdownPanel>
        </Dropdown>
      </div>
    </ThemeDS>
  );
};

export const UseExample = () => {
  const [language, setLanguage] = useState("ar");

  const handleChange = (value) => {
    setLanguage(value);
  };

  const getImage = (country) => {
    let image = null;

    switch (country) {
      case "ar":
        image = argentina;
        break;
      case "br":
        image = brasil;
        break;
      case "usa":
        image = usa;
        break;
      default:
        break;
    }

    return image;
  };

  return (
    <ThemeDS>
      <Dropdown name="dropdown" onSelect={handleChange}>
        <DropdownToogle>
          <Image img={getImage(language)} size="avatar" type="round" />
        </DropdownToogle>

        <DropdownPanel>
          <DropdownItem value="ar">
            {/* TODO: Usar el componente Flex */}
            <div
              style={{ alignItems: "center", display: "flex", width: "100%" }}
            >
              <Image
                img={argentina}
                margin="a-4 r-8"
                size="avatarSm"
                type="round"
              />
              <Text>Argentina</Text>
            </div>
          </DropdownItem>

          <DropdownItem value="usa">
            {/* TODO: Usar el componente Flex */}
            <div
              style={{ alignItems: "center", display: "flex", width: "100%" }}
            >
              <Image img={usa} margin="a-4 r-8" size="avatarSm" type="round" />
              <Text>Estados Unidos</Text>
            </div>
          </DropdownItem>

          <DropdownItem disabled value="br">
            {/* TODO: Usar el componente Flex */}
            <div
              style={{ alignItems: "center", display: "flex", width: "100%" }}
            >
              <Image
                img={brasil}
                margin="a-4 r-8"
                size="avatarSm"
                type="round"
              />

              <Text>Brasil</Text>
              {/* //TODO: Agregar Badge */}
              <div
                style={{
                  backgroundColor: "#338E4E",
                  color: "white",
                  marginLeft: "4px",
                }}
              >
                <Text margin="x-4" size="sm">
                  Proximamente
                </Text>
              </div>
            </div>
          </DropdownItem>
        </DropdownPanel>
      </Dropdown>
    </ThemeDS>
  );
};

export default story;
