# Documentación Técnica de Café Raíces 🖥️📄

## Estructura del Proyecto
```
/cafeteria-web
│
├── index.html        # Página principal
├── styles.css        # Hojas de estilo principales
├── /img              # Directorio de imágenes
│   ├── logo.png
│   └── productos
├── /docs             # Documentación adicional
└── README.md         # Descripción general del proyecto
```

## Guía de Desarrollo

### Convenciones de Código
- **HTML**: Utilizar etiquetas semánticas HTML5
- **CSS**: 
  - Metodología BEM para nomenclatura de clases
  - Uso de variables CSS
  - Comentarios descriptivos
- **Control de Versiones**: 
  - Commits descriptivos
  - Prefijos para tipos de cambio (feat:, fix:, docs:, style:)

### Proceso de Contribución
1. Hacer fork del repositorio
2. Crear branch para nueva funcionalidad
   - Formato: `feature/nombre-caracteristica`
3. Realizar cambios
4. Validar con herramientas de accesibilidad
5. Enviar pull request

### Estándares de Calidad
- ✅ Validación W3C para HTML
- 🌈 Pruebas de accesibilidad WAVE
- 📊 Rendimiento web con Lighthouse
- 💯 Puntuación de accesibilidad mínima: 90/100

### Herramientas Recomendadas
- Visual Studio Code
- Git
- Chrome DevTools
- WAVE Evaluation Tool
- aXe DevTools

### Comandos Útiles de Git
```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/cafe-raices.git

# Crear nueva rama
git checkout -b feature/nueva-caracteristica

# Commit de cambios
git commit -m "feat: Agregar nueva sección de menú"

# Subir cambios
git push origin feature/nueva-caracteristica
```

## Recursos Adicionales
- [Guía de Accesibilidad Web](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [Metodología BEM](https://getbem.com/)
- [HTML Semántico](https://developer.mozilla.org/es/docs/Glossary/Semantics)

## Contacto
Para dudas sobre el desarrollo, contactar a rogermunevar@gmail.com
