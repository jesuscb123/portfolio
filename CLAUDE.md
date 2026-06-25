# CLAUDE.md

## Project Overview

Este proyecto consiste en una aplicación web desarrollada con Next.js.

### Objetivos

- Código limpio y mantenible.
- Arquitectura escalable.
- Seguridad por defecto.
- Buen rendimiento.
- SEO optimizado.
- Accesibilidad.
- Experiencia de usuario profesional.
- Componentes reutilizables.

# Technology Stack

## Core Stack

- Next.js (App Router)
- React
- JavaScript (ES2023+)
- HTML5 semántico
- Tailwind CSS

## Package Manager

- npm

## Deployment

- Vercel

# Development Principles

## Clean Code

### Siempre

- Utilizar nombres descriptivos.
- Mantener funciones pequeñas.
- Mantener componentes pequeños.
- Eliminar código muerto.
- Priorizar legibilidad.
- Aplicar separación de responsabilidades.
- Reducir complejidad innecesaria.

### Nunca

- Código duplicado.
- Componentes monolíticos.
- Funciones con múltiples responsabilidades.
- Hardcodes repetidos.
- Lógica de negocio dentro del JSX.

# Architecture Rules

## Folder Structure

src/  
├── app/  
├── components/  
│ ├── ui/  
│ ├── layout/  
│ └── features/  
├── hooks/  
├── services/  
├── lib/  
├── utils/  
├── styles/  
├── constants/  
└── public/

## Components

Separar claramente:

- UI Components
- Layout Components
- Feature Components

Cada componente debe tener una única responsabilidad.

## Business Logic

La lógica compleja debe vivir en:

- hooks
- services
- utils

Nunca dentro del JSX.

# State Management

Prioridad:

- React Server Components
- useState
- useReducer
- Context API

Evitar estado global innecesario.

# API Rules

Toda llamada API debe:

- Manejar errores.
- Validar respuestas.
- Tener estado loading.
- Tener estado empty.
- Tener estado error.
- Utilizar timeouts cuando sea necesario.

Nunca asumir que una API devolverá datos válidos.

# Security Rules

## Input Validation

Validar siempre:

- Formularios
- Query Params
- Search Params
- Datos externos
- Payloads API

Nunca confiar en datos provenientes del cliente.

## XSS Prevention

Nunca usar:

dangerouslySetInnerHTML

Salvo que exista sanitización explícita.

## Secrets

Nunca:

- Hardcodear API Keys.
- Hardcodear tokens.
- Hardcodear contraseñas.
- Hardcodear credenciales.

Siempre usar:

process.env

## Authentication

Si existe autenticación:

- Cookies HttpOnly.
- Tokens seguros.
- Expiración adecuada.
- Protección CSRF cuando aplique.
- Validación de sesión en servidor.

## Authorization

Verificar permisos en servidor.

Nunca confiar únicamente en validaciones frontend.

# Performance Rules

Prioridades:

- Reducir JavaScript enviado al cliente.
- Utilizar Server Components.
- Lazy Loading.
- Dynamic Imports.
- Optimización de imágenes.
- Optimización de fuentes.

Siempre evaluar:

- Lighthouse
- Bundle Size
- Core Web Vitals
- Re-renders innecesarios

# Accessibility Rules

Cumplir WCAG AA.

### Siempre

- Labels en formularios.
- Alt en imágenes.
- Navegación por teclado.
- Contraste adecuado.
- HTML semántico.
- Roles ARIA cuando sean necesarios.

# SEO Rules

Toda página debe incluir:

- Title único.
- Description única.
- Open Graph.
- Metadata optimizada.
- Sitemap.
- Robots.

Evitar contenido duplicado.

# CSS Rules

## Preferencia

- Tailwind CSS (mantenido por fidelidad con la fuente de diseño Lovable)
- Variables CSS
- Mobile First

## Evitar

- !important
- Selectores excesivamente complejos
- Estilos duplicados
- CSS global innecesario

# Error Handling

Toda funcionalidad debe contemplar:

- Loading State
- Empty State
- Error State
- Success State

Nunca ocultar errores silenciosamente.

Registrar errores relevantes cuando corresponda.

# Reusability Rules

Antes de crear:

- Componentes
- Hooks
- Helpers
- Servicios

Verificar si ya existe una solución reutilizable.

Evitar duplicación de lógica.

# Code Review Checklist

Antes de finalizar cualquier implementación verificar:

## Calidad

- Legibilidad
- Simplicidad
- Consistencia

## Seguridad

- Validaciones
- Gestión de secretos
- Protección XSS

## Rendimiento

- Bundle Size
- Lazy Loading
- Re-renders

## Accesibilidad

- Teclado
- Labels
- Contraste

## SEO

- Metadata
- Estructura semántica

# Workflow Rules

Antes de modificar código:

- Analizar contexto completo.
- Analizar dependencias afectadas.
- Analizar impacto en arquitectura.
- Analizar impacto en rendimiento.
- Analizar impacto en seguridad.

# Feature Development Process

Para nuevas funcionalidades:

- Diseñar estructura.
- Identificar componentes reutilizables.
- Identificar servicios necesarios.
- Definir manejo de errores.
- Definir estados de carga.
- Implementar.
- Revisar.

# Refactoring Rules

Cuando detectes:

- Código duplicado
- Componentes demasiado grandes
- Complejidad innecesaria
- Acoplamiento elevado

Proponer refactorización antes de continuar.

# Testing Mindset

Aunque no existan tests:

- Diseñar código testeable.
- Evitar dependencias ocultas.
- Reducir acoplamiento.
- Favorecer funciones predecibles.

# Claude Behavior

Cuando generes código:

- Actúa como desarrollador senior.
- Prioriza mantenibilidad.
- Prioriza seguridad.
- Prioriza simplicidad.
- Evita sobreingeniería.
- Sigue principios SOLID cuando aporten valor.
- Detecta problemas arquitectónicos antes de programar.
- Explica únicamente decisiones importantes.
- No generes pseudocódigo.
- Entrega código listo para producción.

Si detectas una mala práctica:

- Señálala.
- Explica el riesgo.
- Propón una alternativa profesional.

Si falta información:

- Pregunta antes de asumir.

# Final Objective

Construir una aplicación robusta, segura, escalable, accesible y mantenible siguiendo estándares profesionales de desarrollo frontend moderno y preparada para producción.
