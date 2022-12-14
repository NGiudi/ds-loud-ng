import React, { useState } from "react";

/* import components */
import {
  Badge,
  Dropdown,
  DropdownItem,
  DropdownPanel,
  DropdownToogle,
  Flex,
  Image,
  Text,
  ThemeDS,
} from "../../../";

/* import images */
import argentina from "../../../assets/countries flag/argentina.png";
import brasil from "../../../assets/countries flag/brasil.png";
import usa from "../../../assets/countries flag/usa.png";

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
      <Flex hAlign="space-around">
        <Dropdown>
          <DropdownToogle>
            <Image img={argentina} size="avatar" type="round" />
          </DropdownToogle>

          <DropdownPanel>
            <DropdownItem value="ar">
              <Flex vAlign="center">
                <Image
                  img={argentina}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />

                <Text>Argentina</Text>
              </Flex>
            </DropdownItem>

            <DropdownItem value="usa">
              <Flex vAlign="center">
                <Image
                  img={usa}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />

                <Text>Estados Unidos</Text>
              </Flex>
            </DropdownItem>
          </DropdownPanel>
        </Dropdown>

        <Dropdown>
          <DropdownToogle>
            <Image img={argentina} size="avatar" type="round" />
          </DropdownToogle>

          <DropdownPanel direction="left">
            <DropdownItem value="ar">
              <Flex vAlign="center">
                <Image
                  img={argentina}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />

                <Text>Argentina</Text>
              </Flex>
            </DropdownItem>

            <DropdownItem value="usa">
              <Flex vAlign="center">
                <Image
                  img={usa}
                  margin="a-4 r-8"
                  size="avatarSm"
                  type="round"
                />

                <Text>Estados Unidos</Text>
              </Flex>
            </DropdownItem>
          </DropdownPanel>
        </Dropdown>
      </Flex>
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
            <Flex vAlign="center">
              <Image
                img={argentina}
                margin="a-4 r-8"
                size="avatarSm"
                type="round"
              />

              <Text>Argentina</Text>
            </Flex>
          </DropdownItem>

          <DropdownItem value="usa">
            <Flex vAlign="center">
              <Image img={usa} margin="a-4 r-8" size="avatarSm" type="round" />
              <Text>Estados Unidos</Text>
            </Flex>
          </DropdownItem>

          <DropdownItem disabled value="br">
            <Flex vAlign="center">
              <Image
                img={brasil}
                margin="a-4 r-8"
                size="avatarSm"
                type="round"
              />

              <Text>Brasil</Text>

              <Badge margin="l-8">Proximamente</Badge>
            </Flex>
          </DropdownItem>
        </DropdownPanel>
      </Dropdown>
    </ThemeDS>
  );
};

export default story;
