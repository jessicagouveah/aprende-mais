# Arquitetura planejada do Aprende+

## Perfis
STUDENT, GUARDIAN, SCHOOL, PSYCHOLOGIST, THERAPIST, ADMIN.

## Regra principal
O módulo especializado é ativado para um perfil infantil quando houver autorização adequada e necessidade declarada pela família/sistema. A interface não deve tratar o diagnóstico como informação pública.

## Separação de dados
- Clínico/profissional: acesso restrito a profissionais autorizados e responsável.
- Pedagógico: compartilhável com escola conforme autorização.
- IA: preferir um perfil pedagógico sanitizado em vez de enviar laudos completos.

## Próxima implementação
1. Auth + RBAC.
2. PostgreSQL.
3. Storage privado.
4. Auditoria.
5. Consentimento e compartilhamento granular.
6. API server-side para IA.
7. Upload real de documentos.
8. Painéis reais de evolução.
