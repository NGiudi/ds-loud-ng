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
import argentina from "../../../assets/images/countries_flag/argentina.png";
import brasil from "../../../assets/images/countries_flag/brasil.png";
import usa from "../../../assets/images/countries_flag/usa.png";

const meta = {
  argTypes: {
    childrem: {
      control: { type: "none" },
      description: "Es el contenido del componente.",
    },
    icon: {
      control: { type: "text" },
      description: "Recibe el nombre del icono de fontawensome free.",
    },
    margin: {
      control: { type: "text" },
      description: "Se setea la distancia de los margenes.",
    },
    name: {
      control: { type: "text" },
      description: "nombre identificador del componente",
    },
    onSelect: {
      control: { type: "none" },
      description:
        "método que se ejecuta al seleccionar una opción del contenido.",
    },
    size: {
      control: { type: "select" },
      description: "Recibe el valor del tamaño del ícono.",
      options: ["sm", "md", "lg"],
    },
  },
  component: Dropdown,
  parameters: {
    status: {
      type: "beta",
    },
  },
  tags: ["autodocs"],
  title: "Components/Dropdown",
};

export const Positions = () => {
  return (
    <ThemeDS>
      <Flex hAlign="space-around">
        <Dropdown>
          <DropdownToogle>
            <Image src={argentina} size="avatar" type="round" />
          </DropdownToogle>

          <DropdownPanel>
            <DropdownItem value="ar">
              <Flex vAlign="center">
                <Image
                  src={argentina}
                  margin="a-4 r-8"
                  size="avatar"
                  type="round"
                />

                <Text>Argentina</Text>
              </Flex>
            </DropdownItem>

            <DropdownItem value="usa">
              <Flex vAlign="center">
                <Image src={usa} margin="a-4 r-8" size="avatar" type="round" />

                <Text>Estados Unidos</Text>
              </Flex>
            </DropdownItem>
          </DropdownPanel>
        </Dropdown>

        <Dropdown>
          <DropdownToogle>
            <Image src={argentina} size="avatar" type="round" />
          </DropdownToogle>

          <DropdownPanel direction="left">
            <DropdownItem value="ar">
              <Flex vAlign="center">
                <Image
                  src={argentina}
                  margin="a-4 r-8"
                  size="avatar"
                  type="round"
                />

                <Text>Argentina</Text>
              </Flex>
            </DropdownItem>

            <DropdownItem value="usa">
              <Flex vAlign="center">
                <Image src={usa} margin="a-4 r-8" size="avatar" type="round" />

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
          <Image src={getImage(language)} size="avatar" type="round" />
        </DropdownToogle>

        <DropdownPanel>
          <DropdownItem value="ar">
            <Flex vAlign="center">
              <Image
                src={argentina}
                margin="a-4 r-8"
                size="avatar"
                type="round"
              />

              <Text>Argentina</Text>
            </Flex>
          </DropdownItem>

          <DropdownItem value="usa">
            <Flex vAlign="center">
              <Image src={usa} margin="a-4 r-8" size="avatar" type="round" />
              <Text>Estados Unidos</Text>
            </Flex>
          </DropdownItem>

          <DropdownItem disabled value="br">
            <Flex vAlign="center">
              <Image src={brasil} margin="a-4 r-8" size="avatar" type="round" />

              <Text>Brasil</Text>

              <Badge margin="l-8">Proximamente</Badge>
            </Flex>
          </DropdownItem>
        </DropdownPanel>
      </Dropdown>
    </ThemeDS>
  );
};

export default meta;
