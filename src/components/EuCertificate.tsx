import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const EuStars = () => (
  <div className="flex items-center gap-1">
    {[...Array(12)].map((_, i) => (
      <span key={i} className="text-eu-yellow text-lg">★</span>
    ))}
  </div>
);

const EuCertificate = () => {
  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background print-friendly">
      {/* Header */}
      <header className="eu-header-bg py-4 px-6 mb-6 print:mb-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-eu-blue-dark rounded-full flex items-center justify-center border-2 border-eu-yellow">
              <EuStars />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold tracking-wide">UNIÓN EUROPEA</h1>
              <h2 className="text-lg font-semibold">CERTIFICACIÓN LOGÍSTICA OFICIAL</h2>
              <p className="text-sm opacity-90">Ref. Proceso: EU-ESP-LOG-2025-0814-CS</p>
            </div>
          </div>
          <Button 
            onClick={handlePrintPDF}
            variant="outline" 
            className="bg-white text-eu-blue border-white hover:bg-eu-light print:hidden"
          >
            <Download className="w-4 h-4 mr-2" />
            Descargar en PDF
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-8">
        {/* Datos del Cliente */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            DATOS DEL CLIENTE
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Nombre completo:</p>
              <p className="font-semibold text-eu-text">Carlos Javier Molina Sanz</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">DNI:</p>
              <p className="font-semibold text-eu-text">25135417M</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-sm text-muted-foreground">Dirección:</p>
              <p className="font-semibold text-eu-text">Calle Val Alta, nº 15, Casa 2, 50800 Zuera, Zaragoza, España</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Correo electrónico:</p>
              <p className="font-semibold text-eu-text">carlosmolinasanz@hotmail.com</p>
            </div>
          </div>
        </section>

        {/* Información del Vehículo */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            INFORMACIÓN DEL VEHÍCULO
          </h3>
          <div className="bg-green-50 border border-green-200 rounded-sm p-4 mb-4">
            <p className="text-green-800 font-semibold">
              Estado del proceso: Preparación logística completada – Certificado disponible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Vehículo:</p>
              <p className="font-semibold text-eu-text">Rapido 8066 DF Alde</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Año del modelo:</p>
              <p className="font-semibold text-eu-text">2022</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kilometraje:</p>
              <p className="font-semibold text-eu-text">26.500 km (Certificado)</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Precio de compra:</p>
              <p className="font-semibold text-eu-text">32.500 €</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Caja de cambios:</p>
              <p className="font-semibold text-eu-text">Automática</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Combustible:</p>
              <p className="font-semibold text-eu-text">Diesel</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Potencia:</p>
              <p className="font-semibold text-eu-text">150 CV</p>
            </div>
          </div>
        </section>

        {/* Servicios Certificados */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            SERVICIOS CERTIFICADOS INCLUIDOS – PAQUETE SEGURIDAD EXPRESS
          </h3>
          <table className="certificate-table">
            <thead>
              <tr>
                <th>Código</th>
                <th>Descripción</th>
                <th>Validez</th>
                <th className="text-right">Valor (€)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-mono">EU-290-TUV</td>
                <td>Inspección técnica oficial TÜV</td>
                <td>24 meses</td>
                <td className="text-right">1.500,00</td>
              </tr>
              <tr>
                <td className="font-mono">EU-416-ADMINT</td>
                <td>Trámite y verificación administrativa interna</td>
                <td>—</td>
                <td className="text-right">1.050,00</td>
              </tr>
              <tr>
                <td className="font-mono">EU-723-GAR12M</td>
                <td>Garantía técnica europea</td>
                <td>12 meses</td>
                <td className="text-right">1.350,00</td>
              </tr>
              <tr>
                <td className="font-mono">EU-850-LOGSUP</td>
                <td>Supervisión logística y coordinación interna</td>
                <td>—</td>
                <td className="text-right">1.932,50</td>
              </tr>
              <tr className="bg-eu-light">
                <td colSpan={3} className="font-bold text-right">Total certificado (con IVA):</td>
                <td className="text-right font-bold text-lg">5.832,50 €</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Conformidad */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            CONFORMIDAD
          </h3>
          <p className="text-eu-text text-justify leading-relaxed">
            El presente documento cumple con la normativa de la Unión Europea aplicable a la exportación y entrega 
            transfronteriza de vehículos entre los Países Bajos y España. Es válido a efectos de registro y matriculación 
            en España, de acuerdo con la legislación europea vigente. Este certificado es válido en formato electrónico 
            y puede ser verificado en la sede del vendedor Auto PH.
          </p>
        </section>

        {/* Contactos Oficiales */}
        <section className="certificate-section">
          <h3 className="text-lg font-semibold text-eu-text mb-4 border-b border-eu-border pb-2">
            CONTACTOS OFICIALES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-eu-text mb-2">Auto PH</h4>
              <p className="text-sm text-muted-foreground mb-1">Empresa concesionaria de automóviles</p>
              <p className="text-eu-text">Autolettestraat 10, 3063 NP Rotterdam</p>
              <p className="text-eu-text">Países Bajos</p>
              <p className="text-eu-text mt-2">
                <span className="text-sm text-muted-foreground">Representada por:</span><br />
                Sr. Thomas Hamelin
              </p>
            </div>
            <div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono:</p>
                  <p className="font-semibold text-eu-text">+39 376 176 2290</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correo electrónico:</p>
                  <p className="font-semibold text-eu-text">contact@autoph.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-eu-border">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Fecha de emisión:</p>
              <p className="font-semibold text-eu-text">Jueves, 14 de agosto de 2025</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="w-24 h-24 border-2 border-dashed border-eu-border rounded-sm flex items-center justify-center bg-eu-light">
                  <div className="text-xs text-center text-muted-foreground">
                    <div className="text-2xl">⚪</div>
                    <div>QR Code</div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Escanear el código QR para<br />seguir el progreso del proceso
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-16 border border-eu-border rounded-sm flex items-center justify-center bg-eu-light">
                  <p className="text-xs text-muted-foreground">
                    Sello y firma del<br />responsable de la<br />certificación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default EuCertificate;