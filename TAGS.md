# Sistema de Tags de Status

Este guia define o uso das tags (Badges) para sinalizar o estado e a natureza do conteúdo no projeto.

## Lista de Tags

| Tag | Cor | Significado | Contexto Principal |
| :--- | :--- | :--- | :--- |
| **Em produção** | Cinza (Zinc) | Conteúdo ainda não finalizado, incompleto ou placeholder. | Sidebar, Páginas WIP |
| **Estável** | Verde (Emerald) | Conteúdo validado, revisado e pronto para uso em produto real. | Sidebar, Títulos |
| **Experimental** | Âmbar (Amber) | Conceito em teste, sujeito a mudanças (beta). | Sidebar, Títulos |
| **Acessível** | Azul (Blue) | Conteúdo com foco específico e revisado de acessibilidade. | Títulos, Seções |
| **Atenção** | Vermelho (Rose) | Ponto crítico, risco de uso incorreto ou armadilha comum. | Seções internas (Erros) |
| **Padrão** | Roxo (Purple) | Decisão reutilizável, regra transversal ao sistema. | Seções internas (Diretrizes) |

## Diretrizes de Uso

### 1. Sidebar
Use tags apenas para sinalizar o **estado** do documento.
*   `Em produção`: Para páginas incompletas.
*   `Estável`: (Opcional) Para páginas de alta confiabilidade, se necessário destacar.
*   `Experimental`: Para novas features não consolidadas.

### 2. Títulos de Página
Use tags para dar contexto imediato antes da leitura.
Exemplo:
> **Botões** `Estável`

### 3. Seções Internas
Use tags para categorizar blocos de conteúdo.
Exemplo:
> **Cores Semânticas** `Padrão`

## Implementação Técnica

Utilize o componente `Badge`.

```tsx
import { Badge } from "@/components/ui/Badge";

// Exemplo básico
<Badge variant="stable">Estável</Badge>

// Variantes disponíveis: 
// 'production' | 'stable' | 'experimental' | 'accessible' | 'attention' | 'standard'
```
