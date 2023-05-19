import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';


const productsList: Product[] = [
  {
    id: "1",
    source: "../assets/images/Yao Han F900-A.jpeg",
    name: "F900 A",
    type: "machine",
    trademark: "Yao Han",
    shortDescription: "Máquina de cierre de sacos de 1 aguja y 2 hilos de alta velocidad con sistema de lubricación automática.",
    description: "Velocidad máxima de costura 1900 rpm Alta velocidad obtenida con baja vibración.   Está diseñado para tener un rendimiento suave de largo alcance con baja vibración, y la última innovación en tecnología de costura de sacos sin problemas. El sistema de lubricación automática protege las piezas móviles y garantiza la máxima productividad con bajo mantenimiento. Fácilmente adaptable a su equipo existente, puede usarse con puntadas estándar de dos hilos o puntadas de 1 hilo y el ancho de puntada es ajustable de 2 a 5 puntos por pulgada (7 – 12 mm) Para el cierre de sacos de todo tipo de papel, algodón, PP / PE, arpillera, yute, etc"
  },
  {
    id: "2",
    source: "../assets/images/Yao Han F900-AT.jpeg",
    name: "F900 AT",
    type: "machine",
    trademark: "",
    shortDescription: "Máquina de cierre de sacos de 1 aguja y 2 hilos de alta velocidad con sistema de lubricación y corta hilo automático.",
    "description": "Velocidad máxima de costura 1900 rpm Alta velocidad obtenida con baja vibración. Sistema de corte de hilo automático con cuchilla giratoria 180 grados.  Está diseñado para tener un rendimiento suave de largo alcance con baja vibración, y la última innovación en tecnología de costura de sacos sin problemas. El sistema de lubricación automática protege las piezas móviles y garantiza la máxima productividad con bajo mantenimiento. Fácilmente adaptable a su equipo existente, puede usarse con puntadas estándar de dos hilos o puntadas de 1 hilo y el ancho de puntada es ajustable de 2 a 5 puntos por pulgada (7 – 12 mm). Para el cierre de bolsas de todo tipo de papel, algodón, PP / PE, arpillera y yute."
  },
  {
    id: "3",
    source: "../assets/images/NewLong NP-7A.jpeg",
    name: "Np7a",
    type: "machine",
    trademark: "",
    shortDescription: "Máquina de cierre de sacos portátil.",
    "description": "Velocidad máxima de costura 1750 rpm.Agarradera aislante de plástico para seguridad del operario.Sistema de lubricación con bomba lubricadora.Levas de acero.Corte de hilo automático.Mínimo mantenimiento.Para el cierre de sacos de todo tipo de papel, algodón, PP / PE, arpillera, yute, etc"
  },
  {
    id: "4",
    source: "../assets/images/Yao Han N980-A.jpeg",
    name: "N980-A",
    type: "machine",
    trademark: "",
    shortDescription: "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel El cabezal de costura estacionario modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas.",
    "description": "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel El cabezal de costura estacionario modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas. Tiene una larga vida útil y alto rendimiento. máx. velocidad 2700 revoluciones/min, tipo de puntada 401, longitud de puntada 7-11,5 mm, ancho máximo de material cosido 8 mm, corte de hilo de cuchilla, lubricación cerrada con aceite completamente automática. Potencia 0,75kW. Peso 47 kg. Cose diversos tipos de materiales, como plástico (plástico, polipropileno tejido o tricotado), papel, materiales compuestos, yute, etc."
  },
  {
    id: "5",
    source: "../assets/images/Yao Han N980-A.jpeg",
    name: "N980ac",
    type: "machine",
    trademark: "",
    shortDescription: "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel Sistema automático de cierre de bolsas con cinta transportadora, modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas.",
    "description": "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel Sistema automático de cierre de bolsas con cinta transportadora, modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas. Tiene una larga vida útil y un alto rendimiento de 500-600 sacos/hora. máx. velocidad 2700 revoluciones/min, tipo de puntada 401, longitud de puntada 8 mm, ancho máximo de material cosido 8 mm, corte de hilo de cuchilla, lubricación cerrada por aceite completamente automática. Peso 230 kg. Cose varios tipos de materiales, como plástico (plástico, polipropileno tejido o tricotado), papel, materiales compuestos, yute, etc. Recomendamos el sistema de agujas SCHMETZ 124X2 200s."
  },
  {
    id: "6",
    source: "../assets/images/Yao Han F900-A.jpeg",
    name: "Hilo marica",
    type: "machine",
    trademark: "El Tolimon",
    shortDescription: "Esta descripcion",
    description: "Velocidad máxima de costura 1900 rpm Alta velocidad obtenida con baja vibración.   Está diseñado para tener un rendimiento suave de largo alcance con baja vibración, y la última innovación en tecnología de costura de sacos sin problemas. El sistema de lubricación automática protege las piezas móviles y garantiza la máxima productividad con bajo mantenimiento. Fácilmente adaptable a su equipo existente, puede usarse con puntadas estándar de dos hilos o puntadas de 1 hilo y el ancho de puntada es ajustable de 2 a 5 puntos por pulgada (7 – 12 mm) Para el cierre de sacos de todo tipo de papel, algodón, PP / PE, arpillera, yute, etc"
  },
  {
    id: "4",
    source: "../assets/images/Yao Han N980-A.jpeg",
    name: "N980-A",
    type: "parts",
    trademark: "",
    shortDescription: "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel El cabezal de costura estacionario modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas.",
    "description": "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel El cabezal de costura estacionario modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas. Tiene una larga vida útil y alto rendimiento. máx. velocidad 2700 revoluciones/min, tipo de puntada 401, longitud de puntada 7-11,5 mm, ancho máximo de material cosido 8 mm, corte de hilo de cuchilla, lubricación cerrada con aceite completamente automática. Potencia 0,75kW. Peso 47 kg. Cose diversos tipos de materiales, como plástico (plástico, polipropileno tejido o tricotado), papel, materiales compuestos, yute, etc."
  },
  {
    id: "5",
    source: "../assets/images/Yao Han N980-A.jpeg",
    name: "N980ac",
    type: "parts",
    trademark: "",
    shortDescription: "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel Sistema automático de cierre de bolsas con cinta transportadora, modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas.",
    "description": "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel Sistema automático de cierre de bolsas con cinta transportadora, modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas. Tiene una larga vida útil y un alto rendimiento de 500-600 sacos/hora. máx. velocidad 2700 revoluciones/min, tipo de puntada 401, longitud de puntada 8 mm, ancho máximo de material cosido 8 mm, corte de hilo de cuchilla, lubricación cerrada por aceite completamente automática. Peso 230 kg. Cose varios tipos de materiales, como plástico (plástico, polipropileno tejido o tricotado), papel, materiales compuestos, yute, etc. Recomendamos el sistema de agujas SCHMETZ 124X2 200s."
  },
  {
    id: "6",
    source: "../assets/images/Yao Han F900-A.jpeg",
    name: "Hilo marica",
    type: "supplies",
    trademark: "El Tolimon",
    shortDescription: "Esta descripcion",
    description: "Velocidad máxima de costura 1900 rpm Alta velocidad obtenida con baja vibración.   Está diseñado para tener un rendimiento suave de largo alcance con baja vibración, y la última innovación en tecnología de costura de sacos sin problemas. El sistema de lubricación automática protege las piezas móviles y garantiza la máxima productividad con bajo mantenimiento. Fácilmente adaptable a su equipo existente, puede usarse con puntadas estándar de dos hilos o puntadas de 1 hilo y el ancho de puntada es ajustable de 2 a 5 puntos por pulgada (7 – 12 mm) Para el cierre de sacos de todo tipo de papel, algodón, PP / PE, arpillera, yute, etc"
  },
  {
    id: "4",
    source: "../assets/images/Yao Han N980-A.jpeg",
    name: "N980-A",
    type: "supplies",
    trademark: "",
    shortDescription: "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel El cabezal de costura estacionario modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas.",
    "description": "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel El cabezal de costura estacionario modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas. Tiene una larga vida útil y alto rendimiento. máx. velocidad 2700 revoluciones/min, tipo de puntada 401, longitud de puntada 7-11,5 mm, ancho máximo de material cosido 8 mm, corte de hilo de cuchilla, lubricación cerrada con aceite completamente automática. Potencia 0,75kW. Peso 47 kg. Cose diversos tipos de materiales, como plástico (plástico, polipropileno tejido o tricotado), papel, materiales compuestos, yute, etc."
  },
  {
    id: "5",
    source: "../assets/images/Yao Han N980-A.jpeg",
    name: "N980ac",
    type: "supplies",
    trademark: "",
    shortDescription: "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel Sistema automático de cierre de bolsas con cinta transportadora, modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas.",
    "description": "Nuevo sistema largo. para cerrar bolsas de paja y bolsas de papel Sistema automático de cierre de bolsas con cinta transportadora, modelo N980A es un cabezal de costura industrial de doble hilo diseñado para cargas pesadas. Tiene una larga vida útil y un alto rendimiento de 500-600 sacos/hora. máx. velocidad 2700 revoluciones/min, tipo de puntada 401, longitud de puntada 8 mm, ancho máximo de material cosido 8 mm, corte de hilo de cuchilla, lubricación cerrada por aceite completamente automática. Peso 230 kg. Cose varios tipos de materiales, como plástico (plástico, polipropileno tejido o tricotado), papel, materiales compuestos, yute, etc. Recomendamos el sistema de agujas SCHMETZ 124X2 200s."
  },
  {
    id: "6",
    source: "../assets/images/Yao Han F900-A.jpeg",
    name: "Hilo marica",
    type: "supplies",
    trademark: "El Tolimon",
    shortDescription: "Esta descripcion",
    description: "Velocidad máxima de costura 1900 rpm Alta velocidad obtenida con baja vibración.   Está diseñado para tener un rendimiento suave de largo alcance con baja vibración, y la última innovación en tecnología de costura de sacos sin problemas. El sistema de lubricación automática protege las piezas móviles y garantiza la máxima productividad con bajo mantenimiento. Fácilmente adaptable a su equipo existente, puede usarse con puntadas estándar de dos hilos o puntadas de 1 hilo y el ancho de puntada es ajustable de 2 a 5 puntos por pulgada (7 – 12 mm) Para el cierre de sacos de todo tipo de papel, algodón, PP / PE, arpillera, yute, etc"
  },
];
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = productsList;
  constructor() { }

  getProducts(): Product[] {
    return this.products;
  }

  filterProducts(key: string) {
    return this.products.filter(product =>
      product.type.includes(key) || product.type === key
    );
  }
}
