---
title: "Resolviendo Two Integer Sum (Two Sum) en JavaScript: De O(n²) a O(n)"
date: "2026-09-21"
description: "Análisis y resolución detallada del problema Two Integer Sum de NeetCode en JavaScript optimizando con Hash Maps."
---

# Resolviendo Two Integer Sum: La clave de los Hash Maps en Algoritmos

En el camino de preparación para entrevistas técnicas y dominio de estructuras de datos, el repositorio [neetcode-submissions](https://github.com/lolxde121/neetcode-submissions) recopila soluciones prácticas a problemas clásicos de plataformas como NeetCode y LeetCode.

En esta ocasión, exploraremos a fondo uno de los problemas fundamentales dentro de la categoría **Arrays & Hashing**: **Two Integer Sum** (también conocido popularmente como *Two Sum*).

---

## 📌 El Problema

Dado un arreglo de números enteros `nums` y un valor entero `target`, debemos devolver los **índices de los dos números** que sumados den como resultado exactamente el valor de `target`.

### Reglas:
1. Cada entrada tiene exactamente una solución válida.
2. No se puede utilizar el mismo elemento dos veces.
3. Se pueden retornar los índices en cualquier orden (o de forma ascendente).

### Ejemplo:
- **Entrada:** `nums = [3, 4, 5, 6]`, `target = 7`
- **Salida:** `[0, 1]` (ya que `nums[0] + nums[1] = 3 + 4 = 7`)

---

## 💡 Enfoque 1: Fuerza Bruta (Brute Force)

La primera intuición suele ser comparar cada elemento con todos los demás mediante dos bucles anidados:

```javascript
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j];
    }
  }
}
```

### ¿Cuál es el inconveniente?
- **Complejidad Temporal:** $O(n^2)$ — Para arreglos grandes, el tiempo de ejecución crece de forma cuadrática, volviéndose ineficiente.
- **Complejidad Espacial:** $O(1)$ — No usa memoria adicional.

---

## 🚀 Enfoque Óptimo: Búsqueda del Complemento con Hash Map ($O(n)$)

Podemos transformar la ecuación básica de la suma:

$$\text{actual} + \text{complemento} = \text{target} \implies \text{complemento} = \text{target} - \text{actual}$$

En lugar de buscar el complemento iterando por todo el arreglo restante, podemos almacenarlo en una tabla hash (`Map` en JavaScript). A medida que recorremos la lista una sola vez:

1. Calculamos el complemento necesario: `p = target - nums[i]`.
2. Verificamos si ya hemos visto ese complemento antes (`complements.has(p)`).
3. Si existe, ¡encontramos la pareja! Retornamos el índice actual y el índice guardado.
4. Si no existe, guardamos el número actual y su índice en el mapa: `complements.set(nums[i], i)`.

---

## 💻 Código de la Solución

A continuación se muestra la solución implementada en el repositorio:

```javascript
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let complements = new Map();
        let p = 0;

        for (let i = 0; i < nums.length; i++) {
            p = target - nums[i];
            if (complements.has(p)) {
                return [i, complements.get(p)].sort((a, b) => a - b);
            }
            complements.set(nums[i], i);
        }
    }
}
```

---

## 🔍 Paso a Paso con un Ejemplo

Supongamos `nums = [3, 4, 5, 6]` y `target = 7`:

| Iteración ($i$) | Elemento (`nums[i]`) | Complemento buscado ($p = 7 - \text{nums}[i]$) | ¿Existe en el Mapa? | Contenido del Mapa (`Map`) |
|---|---|---|---|---|
| $i = 0$ | $3$ | $7 - 3 = 4$ | No | `{ 3 => 0 }` |
| $i = 1$ | $4$ | $7 - 4 = 3$ | **Sí** (en el índice 0) | **Retorna `[0, 1]`** |

---

## 📊 Análisis de Complejidad

- **Complejidad de Tiempo:** $O(n)$ — Recorremos el arreglo una sola vez. Las operaciones `has`, `get` y `set` en un `Map` toman tiempo constante promedio $O(1)$.
- **Complejidad de Espacio:** $O(n)$ — En el peor caso, almacenamos hasta $n$ elementos en el mapa de complementos.

---

## 🎯 Conclusión

El uso de un **Hash Map** para registrar elementos ya visitados y comprobar complementos en tiempo $O(1)$ es uno de los patrones más recurrentes y útiles en algoritmos y entrevistas de programación.

Puedes revisar más soluciones en JavaScript y Python en el repositorio oficial de ejercicios: [lolxde121/neetcode-submissions](https://github.com/lolxde121/neetcode-submissions).
