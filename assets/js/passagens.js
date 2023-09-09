jsonpassagens = `{
  "cidades": [
    {
      "nome": "São Paulo",
      "viagens": [
        {
          "id": "1234AB",
          "origem": "São Paulo",
          "destino": "Rio de Janeiro",
          "ida": "2023-09-10",
          "volta": "2023-09-15",
          "dias_de_viagem": 6,
          "preço": 500.00
        },
        {
          "id": "5678CD",
          "origem": "São Paulo",
          "destino": "Brasília",
          "ida": "2023-10-05",
          "volta": "2023-10-10",
          "dias_de_viagem": 5,
          "preço": 350.00
        },
        {
          "id": "9012EF",
          "origem": "São Paulo",
          "destino": "Salvador",
          "ida": "2023-11-20",
          "volta": "2023-11-25",
          "dias_de_viagem": 6,
          "preço": 420.00
        },
        {
          "id": "3456GH",
          "origem": "São Paulo",
          "destino": "Porto Alegre",
          "ida": "2023-12-05",
          "volta": "2023-12-10",
          "dias_de_viagem": 5,
          "preço": 380.00
        }
      ]
    },
    {
      "nome": "Rio de Janeiro",
      "viagens": [
        {
          "id": "7890IJ",
          "origem": "Rio de Janeiro",
          "destino": "São Paulo",
          "ida": "2023-09-12",
          "volta": "2023-09-17",
          "dias_de_viagem": 6,
          "preço": 480.00
        },
        {
          "id": "1234KL",
          "origem": "Rio de Janeiro",
          "destino": "Brasília",
          "ida": "2023-10-08",
          "volta": "2023-10-13",
          "dias_de_viagem": 6,
          "preço": 390.00
        },
        {
          "id": "5678MN",
          "origem": "Rio de Janeiro",
          "destino": "Salvador",
          "ida": "2023-11-15",
          "volta": "2023-11-20",
          "dias_de_viagem": 6,
          "preço": 440.00
        },
        {
          "id": "9012OP",
          "origem": "Rio de Janeiro",
          "destino": "Porto Alegre",
          "ida": "2023-12-10",
          "volta": "2023-12-15",
          "dias_de_viagem": 6,
          "preço": 400.00
        }
      ]
    },
    {
      "nome": "Brasília",
      "viagens": [
        {
          "id": "2345QR",
          "origem": "Brasília",
          "destino": "São Paulo",
          "ida": "2023-09-08",
          "volta": "2023-09-12",
          "dias_de_viagem": 5,
          "preço": 360.00
        },
        {
          "id": "6789ST",
          "origem": "Brasília",
          "destino": "Rio de Janeiro",
          "ida": "2023-10-20",
          "volta": "2023-10-25",
          "dias_de_viagem": 6,
          "preço": 400.00
        },
        {
          "id": "0123UV",
          "origem": "Brasília",
          "destino": "Salvador",
          "ida": "2023-11-10",
          "volta": "2023-11-15",
          "dias_de_viagem": 6,
          "preço": 320.00
        },
        {
          "id": "4567WX",
          "origem": "Brasília",
          "destino": "Porto Alegre",
          "ida": "2023-12-15",
          "volta": "2023-12-20",
          "dias_de_viagem": 6,
          "preço": 380.00
        }
      ]
    },
    {
      "nome": "Salvador",
      "viagens": [
        {
          "id": "8901YZ",
          "origem": "Salvador",
          "destino": "São Paulo",
          "ida": "2023-09-25",
          "volta": "2023-09-30",
          "dias_de_viagem": 6,
          "preço": 430.00
        },
        {
          "id": "2345AB",
          "origem": "Salvador",
          "destino": "Rio de Janeiro",
          "ida": "2023-10-15",
          "volta": "2023-10-20",
          "dias_de_viagem": 6,
          "preço": 450.00
        },
        {
          "id": "6789CD",
          "origem": "Salvador",
          "destino": "Brasília",
          "ida": "2023-11-05",
          "volta": "2023-11-10",
          "dias_de_viagem": 6,
          "preço": 340.00
        },
        {
          "id": "0123EF",
          "origem": "Salvador",
          "destino": "Porto Alegre",
          "ida": "2023-12-25",
          "dias_de_viagem": 6,
          "preço": 410.00
        }
      ]
    },
    {
      "nome": "Porto Alegre",
      "viagens": [
        {
          "id": "4567FG",
          "origem": "Porto Alegre",
          "destino": "São Paulo",
          "ida": "2023-09-15",
          "volta": "2023-09-20",
          "dias_de_viagem": 6,
          "preço": 380.00
        },
        {
          "id": "8901HI",
          "origem": "Porto Alegre",
          "destino": "Rio de Janeiro",
          "ida": "2023-10-25",
          "volta": "2023-10-30",
          "dias_de_viagem": 6,
          "preço": 400.00
        },
        {
          "id": "2345IJ",
          "origem": "Porto Alegre",
          "destino": "Brasília",
          "ida": "2023-11-20",
          "volta": "2023-11-25",
          "dias_de_viagem": 6,
          "preço": 380.00
        },
        {
          "id": "6789KL",
          "origem": "Porto Alegre",
          "destino": "Salvador",
          "ida": "2023-12-25",
          "dias_de_viagem": 6,
          "preço": 410.00
        }
      ]
    },
    {
      "nome": "Belém",
      "viagens": [
        {
          "id": "0123MN",
          "origem": "Belém",
          "destino": "São Paulo",
          "ida": "2023-09-08",
          "volta": "2023-09-15",
          "dias_de_viagem": 7,
          "preço": 550.00
        },
        {
          "id": "4567OP",
          "origem": "Belém",
          "destino": "São Paulo",
          "ida": "2023-09-15",
          "volta": "2023-09-20",
          "dias_de_viagem": 7,
          "preço": 540.00
        },
        {
          "id": "8901QR",
          "origem": "Belém",
          "destino": "São Paulo",
          "ida": "2023-09-20",
          "volta": "2023-09-25",
          "dias_de_viagem": 7,
          "preço": 530.00
        },
        {
          "id": "2345ST",
          "origem": "Belém",
          "destino": "Brasília",
          "ida": "2023-10-10",
          "volta": "2023-10-17",
          "dias_de_viagem": 7,
          "preço": 480.00
        },
        {
          "id": "6789UV",
          "origem": "Belém",
          "destino": "Brasília",
          "ida": "2023-10-17",
          "volta": "2023-10-24",
          "dias_de_viagem": 7,
          "preço": 470.00
        },
        {
          "id": "0123WX",
          "origem": "Belém",
          "destino": "Brasília",
          "ida": "2023-10-24",
          "volta": "2023-10-31",
          "dias_de_viagem": 7,
          "preço": 460.00
        },
        {
          "id": "4567YZ",
          "origem": "Belém",
          "destino": "Salvador",
          "ida": "2023-11-20",
          "volta": "2023-11-27",
          "dias_de_viagem": 8,
          "preço": 590.00
        },
        {
          "id": "8901AB",
          "origem": "Belém",
          "destino": "Salvador",
          "ida": "2023-11-27",
          "volta": "2023-12-04",
          "dias_de_viagem": 8,
          "preço": 580.00
        },
        {
          "id": "2345BC",
          "origem": "Belém",
          "destino": "Salvador",
          "ida": "2023-12-04",
          "volta": "2023-12-11",
          "dias_de_viagem": 8,
          "preço": 570.00
        },
        {
          "id": "6789CD",
          "origem": "Belém",
          "destino": "Porto Alegre",
          "ida": "2023-12-25",
          "volta": "2023-12-31",
          "dias_de_viagem": 7,
          "preço": 550.00
        }
      ]
    },
    {
      "nome": "Fortaleza",
      "viagens": [
        {
          "id": "0123DE",
          "origem": "Fortaleza",
          "destino": "São Paulo",
          "ida": "2023-09-12",
          "volta": "2023-09-19",
          "dias_de_viagem": 7,
          "preço": 530.00
        },
        {
          "id": "4567FG",
          "origem": "Fortaleza",
          "destino": "São Paulo",
          "ida": "2023-09-19",
          "volta": "2023-09-26",
          "dias_de_viagem": 7,
          "preço": 520.00
        },
        {
          "id": "8901HI",
          "origem": "Fortaleza",
          "destino": "São Paulo",
          "ida": "2023-09-26",
          "volta": "2023-10-03",
          "dias_de_viagem": 7,
          "preço": 510.00
        },
        {
          "id": "2345IJ",
          "origem": "Fortaleza",
          "destino": "Brasília",
          "ida": "2023-10-15",
          "volta": "2023-10-22",
          "dias_de_viagem": 7,
          "preço": 460.00
        },
        {
          "id": "6789KL",
          "origem": "Fortaleza",
          "destino": "Brasília",
          "ida": "2023-10-22",
          "volta": "2023-10-29",
          "dias_de_viagem": 7,
          "preço": 450.00
        },
        {
          "id": "0123MN",
          "origem": "Fortaleza",
          "destino": "Brasília",
          "ida": "2023-10-29",
          "volta": "2023-11-05",
          "dias_de_viagem": 7,
          "preço": 440.00
        },
        {
          "id": "4567OP",
          "origem": "Fortaleza",
          "destino": "Recife",
          "ida": "2023-11-05",
          "volta": "2023-11-12",
          "dias_de_viagem": 7,
          "preço": 380.00
        },
        {
          "id": "8901QR",
          "origem": "Fortaleza",
          "destino": "Recife",
          "ida": "2023-11-12",
          "volta": "2023-11-19",
          "dias_de_viagem": 7,
          "preço": 370.00
        },
        {
          "id": "2345ST",
          "origem": "Fortaleza",
          "destino": "Recife",
          "ida": "2023-11-19",
          "volta": "2023-11-26",
          "dias_de_viagem": 7,
          "preço": 360.00
        }
      ]
    },
    {
      "nome": "Manaus",
      "viagens": [
        {
          "id": "6789TU",
          "origem": "Manaus",
          "destino": "São Paulo",
          "ida": "2023-09-15",
          "volta": "2023-09-22",
          "dias_de_viagem": 7,
          "preço": 550.00
        },
        {
          "id": "0123UV",
          "origem": "Manaus",
          "destino": "São Paulo",
          "ida": "2023-09-22",
          "volta": "2023-09-29",
          "dias_de_viagem": 7,
          "preço": 540.00
        },
        {
          "id": "4567WX",
          "origem": "Manaus",
          "destino": "São Paulo",
          "ida": "2023-09-29",
          "volta": "2023-10-06",
          "dias_de_viagem": 7,
          "preço": 530.00
        },
        {
          "id": "8901YZ",
          "origem": "Manaus",
          "destino": "Brasília",
          "ida": "2023-10-20",
          "volta": "2023-10-27",
          "dias_de_viagem": 7,
          "preço": 480.00
        },
        {
          "id": "2345AB",
          "origem": "Manaus",
          "destino": "Brasília",
          "ida": "2023-10-27",
          "volta": "2023-11-03",
          "dias_de_viagem": 7,
          "preço": 470.00
        },
        {
          "id": "6789CD",
          "origem": "Manaus",
          "destino": "Brasília",
          "ida": "2023-11-03",
          "volta": "2023-11-10",
          "dias_de_viagem": 7,
          "preço": 460.00
        },
        {
          "id": "0123EF",
          "origem": "Manaus",
          "destino": "Belém",
          "ida": "2023-11-20",
          "volta": "2023-11-27",
          "dias_de_viagem": 8,
          "preço": 590.00
        },
        {
          "id": "4567FG",
          "origem": "Manaus",
          "destino": "Belém",
          "ida": "2023-11-27",
          "volta": "2023-12-04",
          "dias_de_viagem": 8,
          "preço": 580.00
        },
        {
          "id": "8901HI",
          "origem": "Manaus",
          "destino": "Belém",
          "ida": "2023-12-04",
          "volta": "2023-12-11",
          "dias_de_viagem": 8,
          "preço": 570.00
        }
      ]
    },
    {
      "nome": "Recife",
      "viagens": [
        {
          "id": "2345IJ",
          "origem": "Recife",
          "destino": "São Paulo",
          "ida": "2023-09-20",
          "volta": "2023-09-27",
          "dias_de_viagem": 7,
          "preço": 520.00
        },
        {
          "id": "6789KL",
          "origem": "Recife",
          "destino": "São Paulo",
          "ida": "2023-09-27",
          "volta": "2023-10-04",
          "dias_de_viagem": 7,
          "preço": 510.00
        },
        {
          "id": "0123MN",
          "origem": "Recife",
          "destino": "São Paulo",
          "ida": "2023-10-04",
          "volta": "2023-10-11",
          "dias_de_viagem": 7,
          "preço": 500.00
        },
        {
          "id": "4567OP",
          "origem": "Recife",
          "destino": "Brasília",
          "ida": "2023-10-25",
          "volta": "2023-11-01",
          "dias_de_viagem": 7,
          "preço": 460.00
        },
        {
          "id": "8901QR",
          "origem": "Recife",
          "destino": "Brasília",
          "ida": "2023-11-01",
          "volta": "2023-11-08",
          "dias_de_viagem": 7,
          "preço": 450.00
        },
        {
          "id": "2345ST",
          "origem": "Recife",
          "destino": "Brasília",
          "ida": "2023-11-08",
          "volta": "2023-11-15",
          "dias_de_viagem": 7,
          "preço": 440.00
        },
        {
          "id": "6789UV",
          "origem": "Recife",
          "destino": "Salvador",
          "ida": "2023-12-15",
          "dias_de_viagem": 7,
          "preço": 420.00
        }
      ]
    }
  ]
}
`