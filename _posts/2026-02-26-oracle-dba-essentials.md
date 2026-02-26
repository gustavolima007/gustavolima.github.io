---
layout: post
title:  "Oracle DBA Essentials: Scripts de Monitoramento e Performance"
date:   2026-02-26 12:00:00 -0300
categories: oracle dba administration
---

Como DBA Oracle, a automação e a monitoria proativa são fundamentais. Neste post, compartilho alguns dos meus scripts SQL favoritos para monitorar sessões bloqueadas, uso de tablespaces e análise de espera (Wait Events).

### 1. Verificando Sessões Bloqueadas
Este script ajuda a identificar rapidamente quem está causando gargalos no banco de dados:

```sql
SELECT
   blocking_session,
   sid,
   serial#,
   wait_class,
   seconds_in_wait
FROM
   v$session
WHERE
   blocking_session IS NOT NULL;
```

### 2. Monitoramento de Tablespaces
Garantir que o espaço em disco seja suficiente é uma das tarefas mais críticas do dia a dia.

Manter um repositório de scripts no GitHub (como o meu "Oracle DBA Toolkit") ajuda não só na produtividade pessoal, mas também serve como um excelente portfólio técnico.
