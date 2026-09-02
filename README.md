# Aprende+ — V2 do protótipo

Protótipo navegável atualizado a partir da versão enviada pela Jéssica.

## O que foi incorporado

- Área do aluno + tutor de aprendizagem com IA (fluxos simulados).
- Área da família/responsável.
- Ativação condicional do **Módulo de Apoio Especializado**.
- Perfil de **Psicóloga**.
- Perfil de **Terapeuta**.
- Registro simulado de:
  - laudos e documentos;
  - avaliações;
  - análises;
  - evolução;
  - recomendações pedagógicas.
- Área da escola com visão limitada a informações pedagógicas autorizadas.
- Tela de permissões e compartilhamento.
- Fluxos de resumo, mapa mental, quiz, plano de estudo e matemática.
- Estrutura preparada para futura integração com backend, autenticação, banco, armazenamento seguro e API de IA.
- Dados usados no protótipo são fictícios.

## Como testar

1. Baixe/descompacte a pasta.
2. Abra `index.html` no navegador.
3. Clique em **Família** no menu inferior.
4. Ative **Perfil de apoio especializado**.
5. Abra Psicóloga, Terapeuta, Permissões e Documentos.
6. Volte a **Estudos** para testar os fluxos do tutor IA.

## Arquitetura de produção recomendada

Frontend: Next.js/React + TypeScript.
Backend: API server-side.
Banco: PostgreSQL/Supabase.
Autenticação: RBAC por perfil.
Arquivos: storage privado com URLs temporárias.
IA: chamada exclusivamente pelo backend, nunca expondo a chave no navegador.
Auditoria: logs de acesso e compartilhamento.
Privacidade: consentimento do responsável, minimização, retenção/deleção e revisão jurídica especializada em LGPD e dados de crianças.

## Importante

Esta versão é um **protótipo funcional de interface**, não um sistema clínico ou educacional de produção. O módulo especializado simula registros; não envia laudos para servidor. Antes de usar dados reais de crianças, é necessário implementar segurança, autenticação, autorização por recurso, criptografia, auditoria, políticas de retenção e validação jurídica/pedagógica/clínica.

## Publicação

Pode continuar no GitHub Pages como demonstração visual. Para a versão com login, banco, documentos e IA real, a aplicação deverá migrar para uma arquitetura com backend.
