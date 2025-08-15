# Documentación Sistema de Inventario Técnico – Sierra-Plas

|**LOGO DE LA EMPRESA** |
|------------------------|
|![](/logos/SierraPlas.png)|

## Resumen Ejecutivo
El proyecto consiste en el diseño e implementación de un sistema de inventario técnico para la empresa Sierra-Plas, dedicada a la fabricación de tinacos y cisternas mediante rotomoldeo. El sistema permitirá registrar, visualizar y gestionar de forma centralizada los procesos de inventario, producción y ventas, optimizando la trazabilidad y reduciendo errores derivados de registros manuales. Desarrollado bajo la metodología ágil SCRUM y la arquitectura MERN (MongoDB, Express.js, React y Node.js), esta solución busca mejorar la eficiencia operativa y respaldar la toma de decisiones basada en información confiable en tiempo real.

---

## Problemática
- Registro manual de inventarios, producción y ventas, generando duplicidad y pérdida de información.  
- Ausencia de reportes automáticos y visualización clara de datos diarios.  
- Limitada eficiencia operativa y dificultad para tomar decisiones estratégicas basadas en información confiable.  

---

## 💡 Propuesta de Solución
El sistema de inventario técnico ofrecerá:  
- Control centralizado de **materia prima y productos terminados**.  
- Gestión de **órdenes de producción**, asociando consumo de materiales y cantidades producidas.  
- **Alertas automáticas** por bajo inventario o irregularidades.  
- **Interfaz web intuitiva** para registrar, consultar y analizar información.  
- **Reportes y gráficos** dinámicos para análisis histórico y en tiempo real.  

---

## 🎯 Objetivo General
Diseñar y desarrollar un sistema de inventario técnico que gestione en tiempo real el ingreso, consumo y control de materia prima, productos terminados y producción, optimizando registros, reduciendo pérdidas y fortaleciendo la trazabilidad en Sierra-Plas.

---

## 📌 Objetivos Específicos
- Diseñar una **base de datos estructurada** para materias primas, productos terminados, ventas y producción diaria.  
- Implementar un **módulo de autenticación** con registro, inicio de sesión y recuperación de contraseña.  
- Incorporar **control de usuarios y roles** (administrador u operador).  
- Registrar **entrada, salida y consumo** de materia prima en producción.  
- Crear **interfaz web intuitiva** para gestión de inventario y producción.  
- Configurar **alertas automáticas** ante niveles bajos de stock o errores de registro.  
- Desarrollar **reportes y análisis visuales** mediante gráficos y tablas.  
- Proporcionar **información confiable** para la toma de decisiones en compras, producción y ventas.  

---

## 🌍 Justificación del Proyecto
El desarrollo de un sistema de inventario técnico responde a la necesidad de Sierra-Plas de optimizar sus procesos productivos y administrativos, mediante el control integral y en tiempo real de materiales, producción y ventas. La automatización de estos procesos reducirá significativamente los errores humanos, mejorará la eficiencia del personal y garantizará la disponibilidad de información confiable para la toma de decisiones.  

La incorporación de herramientas de análisis visual, como reportes dinámicos y gráficos interactivos, permitirá supervisar de forma ágil el rendimiento diario, detectar tendencias y anticipar necesidades operativas. Esta solución tecnológica fortalece la competitividad de la empresa y le brinda una base sólida para su crecimiento y adaptación a las exigencias del mercado, alineándose con las tendencias de digitalización y transformación tecnológica en el sector manufacturero.

---

## Requerimientos Funcionales y No Funcionales

| **Requerimientos Funcionales (RF)** | **Requerimientos No Funcionales (RNF)** |
|------------------------------------|----------------------------------------|
| **Gestión de Materia Prima:**<br>- Registrar nuevas materias primas.<br>- Registrar entrada de materia prima al almacén.<br>- Registrar consumo de materia prima por orden de producción.<br>- Actualizar stock disponible después de cada movimiento.<br>- Consultar stock actual de todas las materias primas.<br>- Generar alertas cuando una materia prima alcanza su stock mínimo.<br><br>**Gestión de Productos Terminados (Tinacos y Cisternas):**<br>- Registrar nuevos productos terminados.<br>- Registrar producción diaria de productos terminados.<br>- Registrar salida de productos terminados por venta.<br>- Actualizar automáticamente el inventario de productos terminados.<br>- Consultar inventario actual de productos terminados.<br><br>**Gestión de Órdenes de Producción:**<br>- Crear y gestionar órdenes de producción, asociando materias primas necesarias y cantidades esperadas de producto terminado.<br>- Calcular automáticamente el consumo de materia prima según la producción registrada.<br><br>**Generación de Reportes:**<br>- Reporte de movimientos de inventario por fecha.<br>- Reporte de consumo de materia prima por producto/producción.<br>- Reporte de producción diaria/semanal/mensual.<br>- Reporte de ventas diarias/semanales/mensuales.<br><br>**Gestión de Usuarios y Roles:**<br>- Creación y gestión de usuarios (administradores u operadores de almacén).<br>- Asignación de roles y permisos específicos.<br>- Autenticación segura mediante usuario y contraseña. | **Rendimiento:**<br>- Consultas de inventario <3 segundos.<br>- Reportes de inventario <5 segundos.<br><br>**Usabilidad:**<br>- Interfaz intuitiva y fácil de usar.<br>- Diseño claro y consistente.<br><br>**Seguridad:**<br>- Protección de información mediante roles.<br>- Cifrado de datos sensibles.<br><br>**Confiabilidad:**<br>- Disponibilidad del 99%.<br><br>**Mantenibilidad:**<br>- Código modular y documentado.<br><br>**Escalabilidad:**<br>- Soporta aumento de datos.<br>- Permite añadir nuevas funcionalidades sin afectar estabilidad.<br><br>**Compatibilidad:**<br>- Navegadores modernos (Chrome, Edge).<br>- Sistemas operativos de la empresa (Windows 10/11). |

---

## Limitaciones y Alcances

| **Alcances del Proyecto** | **Limitaciones del Proyecto** |
|---------------------------|------------------------------|
| - Módulo de Gestión de Inventario: Control detallado de la entrada, salida y stock actual de materias primas y productos terminados (tinacos y cisternas).<br>- Módulo de Producción: Registro de órdenes de producción, incluyendo consumo de materia prima y cantidad de producto terminado.<br>- Generación de Reportes: Funcionalidades para creación de informes personalizados y predefinidos sobre movimientos de inventario, consumo de materiales, producción diaria y ventas.<br>- Sistema de Alertas: Notificaciones automáticas por bajos niveles de stock de materia prima.<br>- Gestión de Usuarios y Seguridad: Control de acceso basado en roles.<br>- Interfaz Web: Acceso al sistema mediante navegador web. | - Integración con Sistemas Existentes: No incluye integración directa o automática con sistemas contables, de nómina o ERP preexistentes; transferencia de datos manual o mediante exportación.<br>- Hardware y Red: No contempla adquisición o mantenimiento de nuevo hardware ni infraestructura de red.<br>- Automatización de Procesos Físicos: No controla directamente maquinaria de producción o procesos físicos de almacenamiento; datos ingresados manual o escaneados.<br>- Gestión Financiera Avanzada: No incluye módulos avanzados de contabilidad de costos, facturación, cuentas por pagar/cobrar o nómina.<br>- Soporte Multi-sucursal: Limitado a una única planta de producción; expansión requiere desarrollo adicional.<br>- Dispositivos Móviles Específicos: Desarrollo inicial enfocado en interfaz web de escritorio; no garantiza aplicación nativa.<br>- Costo de Licencias de Software: No incluye costos de licencias de terceros salvo especificación expresa. |
